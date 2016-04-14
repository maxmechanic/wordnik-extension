'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

const id = 'wordnik-extension';
const WORDNIK_URL = 'https://wordnik.com/words/';

function onClicked({ selectionText }) {
  const url = WORDNIK_URL + selectionText;
  chrome.tabs.create({ url });
}

const contextConfig = {
  id,
  onclick: onClicked,
  contexts: ['selection'],
  title: 'Find "%s" on Wordnik'
};

chrome.contextMenus.create(contextConfig);