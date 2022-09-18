import { useState } from "react";
import { API } from "aws-amplify";
import { signOut, useSession } from 'next-auth/react';
import { getNFTS, updateNFTs } from "./nfts";
import { createUser as createUserMutation, updateUser } from "../src/graphql/mutations";
import { getWalletByWalletAddress } from "../src/graphql/queries";
import { v4 } from "uuid";
import moment from "moment/moment";
import { PRICE_PER_TOKEN } from "../shared/contants";

function useUser() {
  const {data: session} = useSession();
  const [user, setUser] = useState();

  async function starItem(itemId, user) {
    if (user.itemsStarred.includes(itemId)) {
      throw new Error('Item already starred');
    }

    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            _version: user._version,
            itemsStarred: [
              ...user.itemsStarred,
              itemId,
            ]
          }
        }
      });
      return data ? data.updateUser : null;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function createUser(obj) {
    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: createUserMutation,
        variables: {
          input: {
            id: v4(),
            wallet: obj.wallet,
            tokens: 0,
            redeemed: false,
            redeemDate: moment.utc().startOf('week').add(6, 'days').toISOString(),
            discordId: obj.discordId,
            image: obj.image,
            username: obj.username,
            discriminator: obj.discriminator,
            nfts: obj.nfts,
          }
        }
      });

      return data ? data.createUser : undefined;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function getUserByWallet(wallet) {
    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: getWalletByWalletAddress,
        variables: {
          wallet,
        }
      });

      return data.getWalletByWalletAddress.items.length > 0 ? data.getWalletByWalletAddress.items[0] : null;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  const saveUser = async (wallet) => {
    try {
      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: getWalletByWalletAddress,
        variables: {
          wallet,
        }
      });

      const user = data.getWalletByWalletAddress.items.length > 0 ? data.getWalletByWalletAddress.items[0] : null;

      if (user) {
        const nfts = await getNFTS(user.wallet);

        if (nfts.length === 0) {
          throw new Error('User does not own any/are listed nfts');
        }

        const updatedUser = await updateNFTs({
          id: user.id,
          nfts: nfts.map((n) => ({
            contract: n.contract.address,
            tokenId: n.tokenId,
          })),
          _version: user._version,
        });

        if (updatedUser) {
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(updatedUser ?? null);
        }
      } else {
        const nfts = await getNFTS(wallet ?? '');

        const newUser = await createUser({
          wallet: wallet ?? '',
          nfts: nfts.map((n) => ({
            contract: n.contract.address,
            tokenId: n.tokenId,
          })),
          tokens: 0,
          redeemDate: moment.utc().add('1', 'week').toISOString(),
        });

        if (newUser) {
          localStorage.setItem('user', JSON.stringify(newUser));
          setUser(newUser ?? null);
        }
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  async function logIn(wallet) {
    if (!wallet) {
      throw new Error('Wallet address required');
    }
    localStorage.setItem('wallet', wallet);
    await saveUser(wallet);
  }

  async function logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('wallet');
  }

  async function claimTokens() {
    const redeemDate = moment.utc(user.redeemDate);
    const today = moment.utc();
    if (today.isBefore(moment.utc(redeemDate))) {
      throw new Error(`Tokens can be claimed after ${redeemDate.format('YYYY-MM-DD')}`);
    }

    try {
      const user = localStorage.getItem('user');
      const nfts = user.nfts.length ?? 1;
      const claimableTokens = nfts * PRICE_PER_TOKEN;

      const { data, error, extensions } = await API.graphql({
        authMode: 'API_KEY',
        query: updateUser,
        variables: {
          input: {
            id: user.id,
            _version: user._version,
            tokens: claimableTokens,
          }
        }
      });

      if (data.updateUser) {
        getUserByWallet(user.wallet);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async function updateUserNFTs() {
    try {
      const user = localStorage.getItem('user');
      const nfts = await getNFTS(user.wallet);
      const updatedUser = await updateNFTs({
        id: user.id,
        nfts: nfts.map((n) => ({
          contract: n.contract.address,
          tokenId: n.tokenId,
        })),
        _version: user._version,
      });

      if (updatedUser) {
        getUserByWallet(user.wallet);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return [user, session, logIn, logOut, claimTokens, updateUserNFTs, starItem];
}

export default useUser;