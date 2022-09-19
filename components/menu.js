import { useState, useEffect } from "react";
import RoomAssets from "../pages/api/roomAssets.json";

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
        <img alt=""
          src={ cat.thumb }
          data-assetnormal={ cat.path }
          data-assetreverse={ cat.reverse }
          width="120"
          height="120"
        />;
    } else {
      content = cat.name;
    }
    return  <li className={ isItem ? "menuItem btn isItem" : "menuItem btn" }
              data-catid={ curMenuData.children.indexOf(cat) }
              data-slotname={ cat.slot }
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
    const clickedCat = e.currentTarget.dataset.catid;
    setMenuCoords(menuCoords => [...menuCoords, clickedCat]);
  }

  const handleItemClick = (e) => {
    curCatID = e.currentTarget.dataset.catid;
    const itemData = getItemData(menuCoords, curCatID);
    let layer = document.getElementById(curSlot);
    console.log("isreversed? -> " + layer.dataset.isreversed);
    layer.src = layer.dataset.isreversed == "true" ? itemData.reverse : itemData.path;
    layer.dataset.assetnormal = itemData.path;
    layer.dataset.assetreverse = itemData.reverse;
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
      case "deskBase":
      case "deskType":
      case "deskChair":
      case "deskMirror":
      case "deskItem":
      default:
        console.log("no slot found");
    }
  }

  const handleCancelClick = (e) => {

  }

  const handleBuyClick = (e) => {

  }

  const flipBed = (itemData) => {
    console.log("flip bed!");
    console.log(itemData);
    const base = document.getElementById("bedBase");
    if (base.dataset.isreversed == "false") {
      base.dataset.isreversed = "true";
      document.getElementById("bedFrame").src = document.getElementById("bedFrame").dataset.assetreverse;
      document.getElementById("bedDesign").src = document.getElementById("bedDesign").dataset.assetreverse;
      document.getElementById("bedPillow").src = document.getElementById("bedPillow").dataset.assetreverse;
      document.getElementById("bedSheet").src = document.getElementById("bedSheet").dataset.assetreverse;
    } else {
      base.dataset.isreversed = "false";
      document.getElementById("bedFrame").src = document.getElementById("bedFrame").dataset.assetnormal;
      document.getElementById("bedDesign").src = document.getElementById("bedDesign").dataset.assetnormal;
      document.getElementById("bedPillow").src = document.getElementById("bedPillow").dataset.assetnormal;
      document.getElementById("bedSheet").src = document.getElementById("bedSheet").dataset.assetnormal;
    };
  }

  const flipDesk = (itemData) => {
    console.log("flip desk!");
    console.log(itemData);
    const base = document.getElementById("deskBase");
    if (base.dataset.isreversed == "false") {
      base.dataset.isreversed = "true";
      document.getElementById("deskType").src = document.getElementById("deskType").dataset.assetreverse;
      document.getElementById("deskChair").src = document.getElementById("deskChair").dataset.assetreverse;
      document.getElementById("deskMirror").src = document.getElementById("deskMirror").dataset.assetreverse;
      document.getElementById("deskItems").src = document.getElementById("deskItems").dataset.assetreverse;
    } else {
      base.dataset.isreversed = "false";
      document.getElementById("deskType").src = document.getElementById("deskType").dataset.assetnormal;
      document.getElementById("deskChair").src = document.getElementById("deskChair").dataset.assetnormal;
      document.getElementById("deskMirror").src = document.getElementById("deskMirror").dataset.assetnormal;
      document.getElementById("deskItems").src = document.getElementById("deskItems").dataset.assetnormal;
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
            className={ (curSlot == "bedFrame") ? "rotBtn toolBtn btn tooltip" : "rotBtn toolBtn btn tooltip disabled" }
            onClick={ handleRotateClick }>
              <div className="icon"></div>
          </div>
          <div id="cancelBtn"
            className={ (curSlot == "bedFrame") ? "cancelBtn toolBtn btn tooltip" : "cancelBtn toolBtn btn tooltip disabled" }
            onClick={ handleCancelClick }>
              <div className="icon"></div>
          </div>
          <div id="buyBtn"
            className={ (curSlot == "bedFrame") ? "buyBtn toolBtn btn tooltip" : "buyBtn toolBtn btn tooltip disabled" }
            onClick={ handleBuyClick }>
              <div className="icon"></div>
          </div>
        </div>
      </div>
    </>
	);
};

export default Menu;