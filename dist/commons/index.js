"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushItemsToArray = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

const pushItemsToArray = (existingArray, newItems) => {
  if (Array.isArray(newItems)) {
    return [...existingArray, ...newItems];
  }

  if (newItems) {
    return [...existingArray, newItems];
  }
};

exports.pushItemsToArray = pushItemsToArray;