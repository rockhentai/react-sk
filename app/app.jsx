import React from 'react';
import {render} from 'react-dom';
import Profile from './profile';

const ele = document.createElement('div');
document.body.appendChild(ele);

render(<Profile name="rockhentai" age="24" />,ele)
