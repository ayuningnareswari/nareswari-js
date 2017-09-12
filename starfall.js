var noh = 10; 
var spd = 10;

imgpre = new Image();
imgpre.scr = "https://1.bp.blogspot.com/-S8J3QHuWRNg/Wa7BBVH6PHI/AAAAAAAAF3s/5ezw59GPQ1ckGO2IPcsjZpE-wAB5ufFAACLcBGAs/s1600/ash25.gif";
imgpre.scr = "https://1.bp.blogspot.com/-Uwa1wKqYt3k/Wa7BEH71-lI/AAAAAAAAF4U/1Hn2HDSqFlcE4MGBBL7uzJS-hoq4sp7MQCLcBGAs/s1600/ash46.gif";
imgpre.scr = "https://2.bp.blogspot.com/-ofaTuLREj24/Wa7BAEsoSiI/AAAAAAAAF3Q/4gdHpmS8xgwVxej1ktjCy57hH3v5WeEswCLcBGAs/s1600/ash17.gif";

ball = new Array();
ball[0] = "https://1.bp.blogspot.com/-S8J3QHuWRNg/Wa7BBVH6PHI/AAAAAAAAF3s/5ezw59GPQ1ckGO2IPcsjZpE-wAB5ufFAACLcBGAs/s1600/ash25.gif";
ball[1] = "https://1.bp.blogspot.com/-Uwa1wKqYt3k/Wa7BEH71-lI/AAAAAAAAF4U/1Hn2HDSqFlcE4MGBBL7uzJS-hoq4sp7MQCLcBGAs/s1600/ash46.gif";
ball[2] = "https://2.bp.blogspot.com/-ofaTuLREj24/Wa7BAEsoSiI/AAAAAAAAF3Q/4gdHpmS8xgwVxej1ktjCy57hH3v5WeEswCLcBGAs/s1600/ash17.gif";

var mbn = 2;
var dxh, xph, yph, dex, dey, ssx, ssy, amh, stx, sty, ihe, dwi, dhe, ssb, ssE, deb, deE;

dhe = 600;
dwi = 800;

dxh = new Array();
xph = new Array();
yph = new Array();
amh = new Array();
stx = new Array();
sty = new Array();
jhe = mbn;

setTimeout("snowh()", spd);

for (ihe = 0; ihe < noh; ++ ihe) {
dxh[ihe] = 0;
xph[ihe] = Math.random()*(dwi-50);
yph[ihe] = Math.random()*dhe;
amh[ihe] = Math.random()*20;
stx[ihe] = 0.02 + Math.random()/10;
sty[ihe] = 0.7 + Math.random();
if (ihe == 0) {
document.write("<div id=\"doth"+ ihe +"\" style=\"position:absolute; z-index:"+ ihe +"; visibility:visible; top:5px; left:5px;\"><img src=\"" + ball[jhe] + "\" border=\"0\"></div>");
} else {
document.write("<div id=\"doth"+ ihe +"\" style=\"position:absolute; z-index:"+ ihe +"; visibility:visible; top:5px; left:5px;\"><img src=\"" + ball[jhe] + "\" border=\"0\"></div>");
}
if (jhe == 0) { jhe = mbn; } else { jhe -= 1; }
}

function snowh() {
for (ihe = 0; ihe < noh; ++ ihe) {
yph[ihe] += sty[ihe];

ssb = document.body.scrollTop;
ssE = document.documentElement.scrollTop;
if(ssb>ssE){
ssy = document.body.scrollTop;
ssx = document.body.scrollLeft;
}else{
ssy = document.documentElement.scrollTop;
ssx = document.documentElement.scrollLeft;
}

deb = document.body.clientHeight;
deE = document.documentElement.clientHeight;
if(deb>1200){
dey = document.documentElement.clientHeight-50;
dex = document.documentElement.clientWidth;
}else{
dey = document.body.clientHeight-50;
dex = document.body.clientWidth;
}

if (yph[ihe] < ssy || yph[ihe] > ssy+dey) {
xph[ihe] = Math.random()*(dwi-amh[ihe]-30);
yph[ihe] = ssy+200*Math.random();
stx[ihe] = 0.02 + Math.random()/10;
sty[ihe] = 0.7 + Math.random();

dwi = dex+ssx;
dhe = ssy;
}
dxh[ihe] += stx[ihe];
document.getElementById('doth'+ihe).style.top = yph[ihe]+"px";
document.getElementById('doth'+ihe).style.left = xph[ihe] + amh[ihe]*Math.sin(dxh[ihe])+"px";
}
setTimeout("snowh()", spd);
}
