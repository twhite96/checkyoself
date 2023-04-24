import React from "react";
// import { Popover } from "antd";
import writeGood from 'write-good';
import "../smde-editor.css";

// This is just some copy pasta I found from a guy who did I similar thing
// However I really don't want to use Draft.js, which is what he used
// that has a SimpleDecorator component. I don't want that dependency
// And I also don't know how to use it.

// I need to get the antd popup to show up when a user types in some bad grammar or spelling
// This all depends on the function writeGoodSuggestions below

// export function writeGoodSuggestions(contentBlock, callback) {
//   let suggestions = writeGood(contentBlock.get("text")) || [];
//   suggestions.forEach(suggestion => {
//   callback(suggestion.index, suggestion.index + suggestion.offset, {
//     suggestion: suggestion
//   });
//  });
// }

export function writeGoodComp ({text}) {
  (<div>{writeGood(text).map(({suggestion}) => suggestion)}</div>);
}
  