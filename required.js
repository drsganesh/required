"use strict";

function require(filePath) {
    let bFileRequired = filePath.substring(0, 2) == './';
    if (!bFileRequired) {
        console.warn('"required" requires a JS filename starting with ./ to load');
    }

    let curScript = document.currentScript;

    let baseURIc = curScript.baseURI;
    let basePath = baseURIc.substring(0, baseURIc.lastIndexOf("/"));

    let srcC = curScript.src;

    let relPath = srcC.replace(basePath + '/', '');

    let rePathScr = relPath.substring(0, relPath.lastIndexOf("/")) + '/';

    let jsSRC = rePathScr + filePath;


    let scriptElem = document.createElement('script')
    scriptElem.onload = function (ren) {


        //debugger;
    }


    scriptElem.setAttribute("type", "text/javascript")
    scriptElem.setAttribute("src", jsSRC)

    document.getElementsByTagName("head")[0].appendChild(scriptElem);

    //debugger;
};//

let module = {};








