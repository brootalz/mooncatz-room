import { useState, useEffect } from "react";
import RoomAssets from "../pages/api/roomAssetsFullScrubbed.json";

const Menu = () => {
  // TODO: Hook up tooltip for button hovers
  console.log("Menu() got called again?");

  const [menuCoords, setMenuCoords] = useState([]);
  // make current menu category JSON a state?
  let curDir = RoomAssets;

  // lame.
  const curSlot = "";
  const curCatID = 0;

  const genMenu = () => {
    let curItems = RoomAssets;
    if (menuCoords.length) {
      console.log("menuCoords: " + menuCoords);
      for (let k in menuCoords) {
        curItems = curItems.children[menuCoords[k]];
        // curSlot not super dependable solution. get some sleep and refactor
        if (curItems.slot) {
          curSlot = curItems.slot;
        }
      }
    }
    return curItems;
  }

  const getItemData = (coords, i) => {
    let curItems = RoomAssets;
    if (coords.length) {
      for (let k in coords) {
        curItems = curItems.children[coords[k]];
      }
    }
    return curItems.children[i];

  }

  const menuItem = (cat) => {
    let isItem = cat.name.includes(".png");
    let content;
    if (isItem) {
      content =
        <img src={ cat.thumb }
          data-assetnormal={ cat.path }
          data-assetreverse={ cat.reverse }
          width="120"
          height="120"
        />;
    } else {
      content = cat.name;
    }
    return  <li className={ isItem ? "menuItem btn isItem" : "menuItem btn" }
              catid={ curMenuData.children.indexOf(cat) }
              slotname={ cat.slot }
              onClick={
                isItem ? handleItemClick : handleCatClick
            }>
              { content }
            </li>
  }

  const handleUpClick = (e) => {
    if (menuCoords.length) {
      setMenuCoords(menuCoords => [...menuCoords.slice(0, -1)]);
    };
  }

  const handleCatClick = (e) => {
    const clickedCat = e.currentTarget.getAttribute("catid");
    setMenuCoords(menuCoords => [...menuCoords, clickedCat]);
  }

  const handleItemClick = (e) => {
    curCatID = e.currentTarget.getAttribute("catid");
    const itemData = getItemData(menuCoords, curCatID);
    console.log(curSlot + " / " + curCatID);
    console.log(e.target.dataset.assetnormal);
    document.getElementById(curSlot).src = itemData.path;
  }

  const handleRotateClick = (e) => {
    const itemData = getItemData(menuCoords, curCatID);
    console.log(curSlot);
    switch (curSlot) {
      case "bedBase":
      case "bedFrame":
      case "bedDesign":
      case "bedPillow":
      case "bedSheet":
        flipBed(itemData);
        break;
      default:
        console.log("no slot found");
    }
  }

  const flipBed = (itemData) => {
    console.log("flip bed!");
    const base = document.getElementById("bedBase");
    base.dataset.reversed = !base.dataset.reversed;
    if (document.getElementById("bedBase").dataset.reversed) {
      document.getElementById("bedFrame").src = document.getElementById("bedFrame").dataset.assetreverse;
      document.getElementById("bedDesign").src = document.getElementById("bedDesign").dataset.assetreverse;
      document.getElementById("bedPillow").src = document.getElementById("bedPillow").dataset.assetreverse;
      document.getElementById("bedSheet").src = document.getElementById("bedSheet").dataset.assetreverse;
    } else {
      document.getElementById("bedFrame").src = document.getElementById("bedFrame").dataset.assetnormal;
      document.getElementById("bedDesign").src = document.getElementById("bedDesign").dataset.assetnormal;
      document.getElementById("bedPillow").src = document.getElementById("bedPillow").dataset.assetnormal;
      document.getElementById("bedSheet").src = document.getElementById("bedSheet").dataset.assetnormal;
    };
  }

  let curMenuData = genMenu();

	return (
		<>
      <div className="menu">
        <div className="menuBorder">
          <div id="lastCatBtn"
            className={ (menuCoords.length) ? "menuUp btn" : "menuUp btn disabled" }
            onClick={ handleUpClick }>
            <div className="icon"></div>
          </div>
          <div className="menuTitle btn">{ curMenuData.name }</div>
          <ul className="itemList">
            {curMenuData.children.map(cat => (
              menuItem(cat)
            ))}
          </ul>
          <hr />
          <div id="rotateBtn"
            className={ (curSlot == "bedFrame") ? "rotBtn btn tooltip" : "rotBtn btn tooltip disabled" }
            onClick={ handleRotateClick }>
              <div className="icon"></div>
          </div>
        </div>
      </div>
    </>
	);
};

export default Menu;