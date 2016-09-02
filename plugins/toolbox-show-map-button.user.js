// ==UserScript==
// @id             iitc-plugin-toolbox-show-map-button
// @name           IITC plugin: Add "Show Map" button to toolbox
// @category       Controls
// @version        0.2.0.@@DATETIMEVERSION@@
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      @@UPDATEURL@@
// @downloadURL    @@DOWNLOADURL@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Add a "Show Map" button to toolbox for mobile Safari
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @include        https://www.ingress.com/mission/*
// @include        http://www.ingress.com/mission/*
// @match          https://www.ingress.com/mission/*
// @match          http://www.ingress.com/mission/*
// @grant          none
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

var setup = function() {
 
  var e = document.createElement('a');
  e.setAttribute('onclick', 'show("map");return false;');
  e.appendChild(document.createTextNode('Show Map'));
  document.getElementById('toolbox').appendChild(e);
 
};

// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
