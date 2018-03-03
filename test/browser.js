require('babel-register')();

var jsdom = require('jsdom').jsdom;
var chai = require('chai');

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.expect = chai.expect;
global.HTMLElement = global.window.HTMLElement;
global.Node = global.window.Node;
global.Element = global.HTMLElement
global.NodeFilter = global.window.NodeFilter;

global.Window = global.window.Window;
global.Document = global.window.Document;
global.DocumentFragment = global.window.DocumentFragment;

global.MutationObserver = function(){
  return {
    observe: () => {}
  }
}

global.documentRef = document;
