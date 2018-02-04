<!-- Begin
/*
 * Notes on hue
 *
 * This script uses hue
 * hue=0   is red (#FF0000)
 * hue=60  is yellow (#FFFF00)
 * hue=120 is green (#00FF00)
 * hue=180 is cyan (#00FFFF)
 * hue=240 is blue (#0000FF)
 * hue=300 is magenta (#FF00FF)
 * hue=360 is hue=0 (#FF0000)
 *
 * Notes on the script
 *
 * This script should function in any browser that supports document.getElementById
 * It has been tested in Netscape7, Mozilla Firefox 1.0, and Internet Explorer 6
 *
 * Accessibility
 *
 * The script does not write the string out, but rather takes it from an existing
 * HTML element. Therefore, users with javascript disabled will not be adverely affected.
 * They just won't get the pretty colors.
 */

/*
 * splits par.firstChild.data into 1 span for each letter
 * ARGUMENTS
 *   span - HTML element containing a text node as the only element
 */
function toSpans(span) {
  var str=span.firstChild.data;
  var a=str.length;
  span.removeChild(span.firstChild);
  for(var i=0; i<a; i++) {
    var theSpan=document.createElement("SPAN");
    theSpan.appendChild(document.createTextNode(str.charAt(i)));
    span.appendChild(theSpan);
  }
}
function RainbowSpan(span, hue, deg, brt, spd, hspd) {
    this.deg=(deg==null?360:Math.abs(deg));
    this.hue=(hue==null?0:Math.abs(hue)%360);
    this.hspd=(hspd==null?3:Math.abs(hspd)%360);
    this.length=span.firstChild.data.length;
    this.span=span;
    this.speed=(spd==null?50:Math.abs(spd));
    this.hInc=this.deg/this.length;
    this.brt=(brt==null?255:Math.abs(brt)%256);
    this.timer=null;
    toSpans(span);
    this.moveRainbow();
}
RainbowSpan.prototype.moveRainbow = function() {
  if(this.hue>359) this.hue-=360;
  var color;
  var b=this.brt;
  var a=this.length;
  var h=this.hue;

  for(var i=0; i<a; i++) {

    if(h>359) h-=360;

    if(h<60) { color=Math.floor(((h)/60)*b); red=b;grn=color;blu=0; }
    else if(h<120) { color=Math.floor(((h-60)/60)*b); red=b-color;grn=b;blu=0; }
    else if(h<180) { color=Math.floor(((h-120)/60)*b); red=0;grn=b;blu=color; }
    else if(h<240) { color=Math.floor(((h-180)/60)*b); red=0;grn=b-color;blu=b; }
    else if(h<300) { color=Math.floor(((h-240)/60)*b); red=color;grn=0;blu=b; }
    else { color=Math.floor(((h-300)/60)*b); red=b;grn=0;blu=b-color; }

    h+=this.hInc;

    this.span.childNodes[i].style.color="rgb("+red+", "+grn+", "+blu+")";
  }
  this.hue+=this.hspd;
}
//-->
var fixd; function isGregLeapYear(year) { return year%4 == 0 && year%100 != 0 || year%400 == 0; } function gregToFixed(year, month, day) { var a = Math.floor((year -1) / 4); var b = Math.floor((year - 1) / 100); var c = Math.floor((year - 1) / 400); var d = Math.floor((367 * month - 362) / 12); if (month <= 2) e = 0; else if (month > 2&& isGregLeapYear(year)) e = -1; else e = -2; return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day; } function Hijri(year, month, day) { this.year = year; this.month = month; this.day = day; this.toFixed = hijriToFixed; this.toString = hijriToString; } function hijriToFixed() { return this.day +Math.ceil(29.5 * (this.month - 1)) +(this.year - 1) * 354 + Math.floor((3 + 11* this.year) / 30) + 227015 - 1; } function hijriToString() { var months = new Array("Suro","Sapar","Mulud","Bakdomulud","Jumadilawal","Jumadilakhir","Rejeb","Ruwah","Poso","Syawal","Dulkaidah","Besar"); return this.day + " " +months[this.month -1]+ " " + this.year; } function fixedToHijri(f) { var i=new Hijri(1100, 1, 1); i.year = Math.floor((30 * (f - 227015) + 10646) / 10631); var i2=new Hijri(i.year, 1, 1); var m = Math.ceil((f - 29- i2.toFixed()) / 29.5) + 1; i.month = Math.min(m, 12); i2.year = i.year; i2.month = i.month; i2.day = 1; i.day = f - i2.toFixed() + 1; return i; } var tod=new Date(); var weekday=new Array ("<font color='#ff0000'>S</font><font color='#ff3300'>u</font><font color='#ff6600'>n</font><font color='#ff9900'>d</font><font color='#ffcc00'>a</font><font color='#ffff00'>y</font>","<font color='#ff0000'>M</font><font color='#ff3300'>o</font><font color='#ff6600'>n</font><font color='#ff9900'>da</font><font color='#ffcc00'>y</font>","<font color='#ff0000'>T</font><font color='#ff3300'>u</font><font color='#ff6600'>e</font><font color='#ff9900'>s</font><font color='#ffcc00'>da</font><font color='#ffff00'>y</font>","<font color='#ff0000'>Wed</font><font color='#ff3300'>nes</font><font color='#ff6600'>da</font><font color='#ff9900'>y</font>","<font color='#ff0000'>Th</font><font color='#ff3300'>ur</font><font color='#ff6600'>s</font><font color='#ff9900'>da</font><font color='#ffcc00'>y</font>","<font color='#ff0000'>F</font><font color='#ff3300'>r</font><font color='#ff6600'>i</font><font color='#ff9900'>d</font><font color='#ffcc00'>a</font><font color='#ffff00'>y</font>","<font color='#ff0000'>Sa</font><font color='#ff3300'>t</font><font color='#ff6600'>ur</font><font color='#ff9900'>da</font><font color='#ffcc00'>y</font>"); var monthname=new Array ("January","February","March","April","May","June","July","August","September","October","November","December"); var y = tod.getFullYear(); var m = tod.getMonth(); var d = tod.getDate(); var dow = tod.getDay();      
           
     document.write(weekday[dow] + "<br>" +"<h id=r511>"+ d +" " +monthname[m] + " " + y + "</h>"); m++; fixd=gregToFixed(y, m, d); var h=new Hijri(1421, 11, 28); h = fixedToHijri(fixd);      
         
          
           
     document.write("<center><h id=r512>" + h.toString() + "&nbsp;&nbsp;" + "H</h>");;
var r511=document.getElementById("r511"); //get span to apply rainbow
var myRainbowSpan=new RainbowSpan(r511, 0, 360, 255, 50, 18);
myRainbowSpan.timer=window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
var r512=document.getElementById("r512"); //get span to apply rainbow
var myRainbowSpan=new RainbowSpan(r512, 0, 360, 255, 50, 18);
myRainbowSpan.timer=window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);
