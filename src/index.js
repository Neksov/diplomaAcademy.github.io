'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from  'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'regexp-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import browser from 'cross-browser-polyfill';
browser();

import togglePopUp from './modules/togglePopUp';
import showAll from './modules/showAll';
import tabs from './modules/tabs';
import sendForm from './modules/sendForm';
import calc from './modules/calc';


//popup
togglePopUp();
//showAll
showAll();
//tabs
tabs();
//send-Ajax-form
sendForm();
//calc
calc();

// new WOW().init();