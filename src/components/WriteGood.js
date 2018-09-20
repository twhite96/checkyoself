/* jshint ignore: start */

import React from 'react';
import writeGood from 'write-good';

class WriteGood extends React.Component {
  render() {
    const WriteGood = ({ text }) => (
      <div>{writeGood(text).map(({ suggestion }) => suggestion)}</div>
    );
    var suggestions = <WriteGood text="So the cat was stolen." />;
    return suggestions;
  }
}

export default WriteGood;
