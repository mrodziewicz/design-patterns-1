
// Opera 8.0+
const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
const isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Blink engine detection
const isBlink = (isChrome || isOpera) && !!window.CSS;

let image;
if( isOpera )   { image = '[Image for Opera]' }
if( isFirefox ) { image = '[Image for Firefox]' }
if( isSafari )  { image = '[Image for Safari]' }
if( isChrome )  { image = '[Image for Chrome]' }
if( isIE )      { image = '[Image for IE]' }
if( isEdge )    { image = '[Image for Edge]' }
if( isBlink )   { image = '[Image for Blink]' }
else            { image = '[Image for Unknown]' }

console.log( image );


/*
// zadanie - wypełnić klasę fasady, aby poniższe wywołanie dało ten sam wynik co powyzszy kod
// zadanie dodatkowe - z powstałej fasady utworzyć osobny moduł ES6 (tak, żeby w tym pliku pozostała tylko jedna linia + import)

function BrowserFacade() {

  // (revealing module pattern)
  return {
    getImage: getImage
  }
}

console.log( (new BrowserFacade()).getImage() )

*/