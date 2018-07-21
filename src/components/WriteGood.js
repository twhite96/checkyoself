import React from 'react';
import writeGood from 'write-good';


const WriteGood = ({ text }) =>
  (<div>{writeGood(text).map(({ suggestion }) => suggestion)}</div>);


export default WriteGood;
