imgpre = new Image();
imgpre.scr = "http://www.cursor-switch.com/images/39912.gif";
imgpre.scr = "http://www.cursor-switch.com/images/39911.gif";
imgpre.scr = "http://www.cursor-switch.com/images/39910.gif";

var ecx=0;
var ecy=0;
var nna=36;
var eex = 500;
var eey = 200;

edx=new Array();
edy=new Array();
mxa=new Array();
mya=new Array();
cdtta=new Array();
choi=new Array();
var kab;
var cpa=0;
var eax,eay;


var cja=35;
choi[0]="http://www.cursor-switch.com/images/39912.gif";
choi[1]="http://www.cursor-switch.com/images/39912.gif";
choi[2]="http://www.cursor-switch.com/images/39912.gif";
choi[3]="http://www.cursor-switch.com/images/39912.gif";
choi[4]="http://www.cursor-switch.com/images/39912.gif";
choi[5]="http://www.cursor-switch.com/images/39912.gif";
choi[6]="http://www.cursor-switch.com/images/39912.gif";
choi[7]="http://www.cursor-switch.com/images/39912.gif";
choi[8]="http://www.cursor-switch.com/images/39912.gif";
choi[9]="http://www.cursor-switch.com/images/39912.gif";
choi[10]="http://www.cursor-switch.com/images/39912.gif";
choi[11]="http://www.cursor-switch.com/images/39912.gif";
choi[12]="http://www.cursor-switch.com/images/39912.gif";
choi[13]="http://www.cursor-switch.com/images/39912.gif";
choi[14]="http://www.cursor-switch.com/images/39912.gif";
choi[15]="http://www.cursor-switch.com/images/39912.gif";
choi[16]="http://www.cursor-switch.com/images/39912.gif";
choi[17]="http://www.cursor-switch.com/images/39912.gif";
choi[18]="http://www.cursor-switch.com/images/39911.gif";
choi[19]="http://www.cursor-switch.com/images/39911.gif";
choi[20]="http://www.cursor-switch.com/images/39911.gif";
choi[21]="http://www.cursor-switch.com/images/39911.gif";
choi[22]="http://www.cursor-switch.com/images/39911.gif";
choi[23]="http://www.cursor-switch.com/images/39911.gif";
choi[24]="http://www.cursor-switch.com/images/39911.gif";
choi[25]="http://www.cursor-switch.com/images/39911.gif";
choi[26]="http://www.cursor-switch.com/images/39911.gif";
choi[27]="http://www.cursor-switch.com/images/39911.gif";
choi[28]="http://www.cursor-switch.com/images/39911.gif";
choi[29]="http://www.cursor-switch.com/images/39911.gif";
choi[30]="http://www.cursor-switch.com/images/39910.gif";
choi[31]="http://www.cursor-switch.com/images/39910.gif";
choi[32]="http://www.cursor-switch.com/images/39910.gif";
choi[33]="http://www.cursor-switch.com/images/39910.gif";
choi[34]="http://www.cursor-switch.com/images/39910.gif";
choi[35]="http://www.cursor-switch.com/images/39910.gif";


for (fma=1;fma<(nna+1);fma++){
if (cja == (choi.length-1)) { cja = 0; } else { cja += 1; }
document.write("<div id=\"cdtta"+fma+"\" style=\"position:absolute; z-index:"+ fma +" ;filter:alpha;visibility:hidden; top:0px; left:0px;\"><img src=\"" + choi[cja] + "\" border=\"0\"></div>");
}
document.write("<div id=\"ballc\" style=\"position:absolute; visibility:hidden; top:0px; left:0px;\"><img src=\"http://www.cursor-switch.com/images/39912.gif\"></div>");


var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();

setTimeout("fire3()",100);

function fire3() { 
clearTimeout(cc_timerID);
for (fma=1;fma<(nna+1);fma++){
      document.getElementById('cdtta'+fma).style.visibility='hidden';
}
      document.getElementById('ballc').style.visibility='visible';
fbcH = document.body.clientHeight;
if(fbcH>1200){
fpy = document.documentElement.clientHeight;
fpx = document.documentElement.clientWidth-200;
}else{
fpy = document.body.clientHeight;
fpx = document.body.clientWidth-200;
}

fmbsT = document.body.scrollTop;
fmdEsT = document.documentElement.scrollTop;
if(fmbsT>=fmdEsT){
fcy = document.body.scrollTop;
fcx = document.body.scrollLeft;
}else{
fcy = document.documentElement.scrollTop;
fcx = document.documentElement.scrollLeft;
}
fzy = fcy+100+100*Math.random();
fzx = fcx+50+fpx*Math.random();
ecy = fpy+fcy-50;
ecx = fzx;
xcf=0;
xzf=0;
fire4();
}
cc_timerID=0;

function fire4() { 
        document.getElementById('ballc').style.visibility='visible';
if(ecy>fzy){
        document.getElementById('ballc').style.top  = ecy-10+"px";
        document.getElementById('ballc').style.left = ecx+20+"px";
if(xcf==0){xzf=xzf+1};
if(xcf==1){xzf=xzf-1};
if(xzf>=3){xcf=1};
if(xzf<=-3){xcf=0};
ecx=ecx-xzf;
ecy=ecy-15;
cc_timerID=setTimeout("fire4()",50);
}else{
clearTimeout(cc_timerID);
fire2();
}
}

function fire2() { 
      document.getElementById('ballc').style.visibility='hidden';
for (fma=1;fma<(nna+1);fma++){

if(fma<=(nna*18/36)){
hea=fma;
edx[fma]=ecx+0.3+2*Math.cos((fma-1)*2*3.14/18);
edy[fma]=ecy+0.3-0.5*Math.sin((fma-1)*2*3.14/18);
}
else if(fma<=(nna*30/36)){
edx[fma]=ecx+0.8*Math.cos((fma-1)*2*3.14/12);
edy[fma]=ecy-0.8*Math.sin((fma-1)*2*3.14/12);
}
else{
edx[fma]=ecx+0.45*Math.cos((fma-1)*2*3.14/6);
edy[fma]=ecy-0.45*Math.sin((fma-1)*2*3.14/6);
}

mxa[fma]=edx[fma]-ecx;
mya[fma]=edy[fma]-ecy;
}
kab=20;
cpa=0;
fire();
}

function fire() {
cpa=cpa+1;
for (fma=1;fma<(nna+1);fma++){
        document.getElementById('cdtta'+fma).style.visibility='visible';
        document.getElementById('cdtta'+fma).style.top  = edy[fma]+"px";
        document.getElementById('cdtta'+fma).style.left = edx[fma]+20+"px";
if (appVersion.indexOf("msie") > -1) {
if(cpa<40){
        document.getElementById('cdtta'+fma).filters.alpha.opacity=100;
}else if(cpa<80){
        document.getElementById('cdtta'+fma).filters.alpha.opacity=100-50*Math.random();
}else{
dea=cpa-80;
        document.getElementById('cdtta'+fma).filters.alpha.opacity=100-50*Math.random()-2.5*dea;
}
}
if(userAgent.indexOf("firefox") > -1){
if(cpa<40){
        document.getElementById('cdtta'+fma).style.MozOpacity=1;
}else if(cpa<80){
        document.getElementById('cdtta'+fma).style.MozOpacity=1-0.5*Math.random();
}else{
dea=cpa-80;
        document.getElementById('cdtta'+fma).style.MozOpacity=1-0.5*Math.random()-0.025*dea;
}
}
edx[fma]=edx[fma]+kab*mxa[fma];
edy[fma]=edy[fma]+kab*mya[fma]+1+1*Math.random();
kab=kab*0.994;
}
cc_timerID=setTimeout("fire()",50);
if (cpa>=120) {
cpa=120;
for (fma=1;fma<(nna+1);fma++){
      document.getElementById('cdtta'+fma).style.visibility='hidden';
}
clearTimeout(cc_timerID);
setTimeout("fire3()",2000);
}
}