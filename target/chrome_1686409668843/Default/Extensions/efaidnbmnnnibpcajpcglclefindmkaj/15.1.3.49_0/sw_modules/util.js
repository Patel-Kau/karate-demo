/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
import{ajax as e,ajaxError as n,each as t,Deferred as r,extend as o,param as i}from"./polyfills.js";import{SETTINGS as s}from"./settings.js";let a={cs:"cs-CZ",da:"da-DK",de:"de-DE",en:"en-US",en_GB:"en-GB",en_US:"en-US",es:"es-ES",fi:"fi-FI",fr:"fr-FR",it:"it-IT",ja:"ja-JP",ko:"ko-KR",nb:"nb-NO",nl:"nl-NL",pl:"pl-PL",pt_BR:"pt-BR",ru:"ru-RU",sv:"sv-SE",tr:"tr-TR",zh_TW:"zh-TW"};var c=["http","https","ftp","file","blob","data","filesystem","drive"],u=chrome.runtime.getURL("/");export const util={extend:o,getFrictionlessLocale:function(e){return a[e]||null},isChrome:function(){return!0},isLocalFileUrl:e=>e.startsWith("file:///")&&(e.endsWith(".pdf")||e.endsWith(".PDF")),isEdge:function(){let e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("chrome")&&-1!==e.indexOf("edg/")},isChromeOnlyMessage:function(e){return-1!==["web2pdfMissingMac","web2pdfFrictionlessUrl","web2pdfBadVersion","pdfOwnershipExploreAcrobat","pdfOwnershipPromptContent","LearnMoreURL"].indexOf(e)},getBrowser:function(){return this.isEdge()?2:1},stackDelimiter:function(){return"\n"},Deferred:r,each:t,ajax:e,ajaxError:n,param:i,newBlob:function(e){return new Blob(e)},newFormData:function(){return new FormData},newXHR:function(){return new XMLHttpRequest},createTab:function(e,n){return n?chrome.tabs.create({url:e,active:!0},n):chrome.tabs.create({url:e,active:!0})},isDevEnv:function(){var e=r();return chrome.management.getSelf((function(n){e.resolve("development"===n.installType)})),e.promise()},closeWindow:function(e){chrome.windows.remove(e.id)},getTranslation:function(e,n){return this.isChromeOnlyMessage(e)&&this.isEdge()&&(e+="Edge"),n?chrome.i18n.getMessage(e,n):chrome.i18n.getMessage(e)},sendMessage:function(e,n,t){chrome.tabs.sendMessage(e.tabId,e,t)},consoleLog:function(...e){s.DEBUG_MODE&&console.log(...e)},consoleLogDir:function(...e){s.DEBUG_MODE&&console.dir(...e)},consoleError:function(...e){s.DEBUG_MODE&&console.error(...e)},showFrictionlessMenu:function(e){return!(!s.IS_READER&&!s.TEST_MODE)||!(!e||!s.FRICTIONLESS_ENABLED||0!=e.version&&(1!=e.version||0!=e.NMHConnStatus)&&e.version!=s.READER_VER)},atob16:function(e){var n,t=atob(e),r=[];for(n=0;n<t.length;n+=2)r.push(String.fromCharCode(t.charCodeAt(n)+256*t.charCodeAt(n+1)));return r.join("")},removeQueryParams:function(e){const n=e.split("?");return null!=n?n[0]:e},parseExtensionURL:function(e){var n=(e=e.substring(u.length)).search(/:|%3A/i);if(-1!==n){var t=e.slice(0,n).toLowerCase();return c.includes(t)?(":"===(e=e.split("#")[0]).charAt(n)&&(e=encodeURIComponent(e)),e):void 0}},isViewerURL:function(e){if(e)try{var n=e.substring(u.length),t=n.search(/:|%3A/i);if(-1!==t){var r=n.slice(0,t).toLowerCase();if(c.includes(r))return!0}return e.startsWith(`chrome-extension://${chrome.runtime.id}/viewer.html`)}catch(e){}return!1},uuid:function(){try{let e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(n){let t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===n?t:3&t|8).toString(16)}))}catch(e){return Math.random()}},sleep:e=>new Promise((n=>setTimeout(n,e))),verCmp:(e,n)=>e.localeCompare(n,void 0,{numeric:!0,sensitivity:"base"}),enableNewExtensionMenu:e=>{e?chrome.action.setPopup({popup:"../browser/js/popup.html"}):chrome.action.setPopup({popup:""})},isAcrobatAvailable:e=>!(0==e||1==e||e===s.READER_VER||e===s.ERP_READER_VER)};