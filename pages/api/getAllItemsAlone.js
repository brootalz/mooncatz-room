const fs = require('fs');
const dirTree = require("directory-tree");

const mainTree = dirTree("../../public/images/roomAssets");
console.log(mainTree);

let paths = [];

const rename = () => {
  fs.rename('/path/to/' + obj[p] + '.png', '/path/to/' + p + '.png', function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
}


const getAllPaths = (obj) => {
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      getAllPaths(obj[k])
    } else {
      // base case, stop recurring
      // console.log(obj[k]);
      if (obj[k].includes(".png")) {
          if (obj[k].includes("Side B") || obj[k].includes("thumb") || obj[k].includes("\\")) {
            // console.log(obj[k]);
          } else {
            paths.push(obj[k]);
            console.log(obj[k]);
          };
          // paths.push(obj[k]);
      };
    }
  }
}

getAllPaths(mainTree);
// console.log(paths);

let pathsJSON = JSON.stringify(paths);
fs.writeFileSync('roomPNGs.json', pathsJSON);

// let treeJSON = JSON.stringify(tree);
// fs.writeFileSync('roomAssetsThumbsNew.json', treeJSON);

// console.log(paths);