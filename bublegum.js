
function addLoadEvent(e){var t=window.onload;if(typeof t!="function")window.onload=e;else window.onload=function(){if(t)t();e()}}function bubbagump(){if(document.getElementById){var e,t,n,r;for(bubbler=0;bubbler<=shades;bubbler++){r="#";for(e=1;e<6;e+=2){n=parseInt(bgcolour.substring(e,e+2),16);t=parseInt(fgcolour.substring(e,e+2),16);r+=dechex(n+(t-n)*(bubbler/shades))}bubbcol[bubbler+1]=r;if(bubbler==Math.floor(shades/2))bubbshd=r}bubbler=document.getElementById("bubble");bubbtxt=bubbler.firstChild.nodeValue;while(bubbler.childNodes.length)bubbler.removeChild(bubbler.childNodes[0]);for(e=0;e<bubbtxt.length;e++){t=document.createElement("span");t.setAttribute("id","bubb"+e);t.style.textShadow=bubbshd+" 0px 0px 2px";t.appendChild(document.createTextNode(bubbtxt.charAt(e)));bubbler.appendChild(t)}bubbler=setInterval("bubbling()",speed)}}function dechex(e){e=Math.floor(e);return(e<16?"0":"")+e.toString(16)}function bubbling(){var e,t;for(e=0;e<bubbtxt.length;e++){t=document.getElementById("bubb"+e);if(bubbchr[e]){t.style.color=bubbcol[bubbchr[e]];bubbchr[e]=(bubbchr[e]+1)%bubbcol.length}else if(Math.random()<7.5/(shades*bubbtxt.length))bubbchr[e]=1}}var bgcolour="#848484";var fgcolour="#D0FA58";var speed=80;var shades=12;var bubbcol=new Array;var bubbshd;var bubbler,bubbtxt;var bubbchr=new Array;addLoadEvent(bubbagump)