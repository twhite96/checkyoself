/* jshint ignore: start */

import React from 'react';
import writeGood from 'write-good';


class WriteGood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props.children;
    return <div>{writeGood(text).map(({ suggestion }) => suggestion)}</div>;
  }
}


export default WriteGood;
