import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import { parseHostFromUrl, isInternalUrl } from './modules/parseUrl.js';
import { fetchLinksFromUrl } from './modules/fetchLinksFromUrl.js';

var sampleUrl = 'https://en.wikipedia.org/wiki/Main_Page';
fetchLinksFromUrl(sampleUrl);
