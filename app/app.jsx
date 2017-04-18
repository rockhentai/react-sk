import React from 'react';
import {render} from 'react-dom';
import Profile from './profile';

const ele = document.createElement('div');
document.body.appendChild(ele);

const props = {
  name:'rockhentai',
  age:24
}

render(<Profile {...props} />,ele)
