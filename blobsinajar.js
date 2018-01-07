var colour="#FA58D0"; // what colour are the blobs
var speed=66; // speed of animation, lower is faster
var blobs=20; // how many blobs are in the jar
var charc=String.fromCharCode(9679); // a blob - can be changed to charc='hello' or charc='*' for a different effect

/***************************\
*   Blobs in a Jar Effect   *
*(c)2011-2018 ASH PRINCESS KAWAII*
*  http://ashprincesskawaii.blogspot.co.id/  *
* DON'T EDIT BELOW THIS BOX *
\***************************/

var div;
var xpos=new Array();
var ypos=new Array();
var zpos=new Array();
var dx=new Array();
var dy=new Array();
var dz=new Array();
var blob=new Array(); 
var swide=800;
var shigh=600;
var ie_version=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(fill_the_jar);

function fill_the_jar() {
	var i, dvs;
	div=document.createElement('div');
	dvs=div.style;
	dvs.position='fixed';
	dvs.left='0px';
	dvs.top='0px';
	dvs.width='1px';
	dvs.height='1px';
	document.body.appendChild(div);
	set_width();
	for (i=0; i<blobs; i++) {
	  add_blob(i);
	  jamjar(i);
	}
}

function add_blob(ref) {
	var dv, sy;
	dv=document.createElement('div');
	sy=dv.style;
	sy.position='absolute';
	sy.textAlign='center';
    if (ie_version && ie_version<10) {
	  sy.fontSize="10px";
	  sy.width="100px";
	  sy.height="100px";
	  sy.paddingTop="40px";
	  sy.color=colour;
      dv.appendChild(document.createTextNode(charc));
	}
	else if (ie_version) {
	  sy.fontSize="1px";
	  sy.width="0px";
	  sy.height="0px";
	}
	else {
	  dv.appendChild(document.createTextNode(charc));
	  sy.color='rgba(0,0,0,0)';
	}
 	ypos[ref]=Math.floor(shigh*Math.random());
	dy[ref]=(0.5+Math.random())*(Math.random()>.5?2:-2);
	xpos[ref]=Math.floor(swide*Math.random());
	dx[ref]=(0.5+Math.random())*(Math.random()>.5?2:-2);
	zpos[ref]=Math.random()*20;
	dz[ref]=(0.5+Math.random())*(Math.random()>.5?.5:-.5);
	blob[ref]=dv;
	div.appendChild(blob[ref]);
	set_blob(ref);
}

function rejig(ref, xy) {
  if (xy=='y') {
	dx[ref]=(0.5+Math.random())*sign(dx[ref]);
    dy[ref]=(0.5+Math.random())*-sign(dy[ref]);
  }
  else {
    dx[ref]=(0.5+Math.random())*-sign(dx[ref]);
  	dy[ref]=(0.5+Math.random())*sign(dy[ref]);
  }
}

function sign(a) {
  if (a<0) return (-2);
  else if (a>0) return (2);
  else return (0);
}

function set_blob(ref) {
	var sy;
	sy=blob[ref].style;
	sy.top=ypos[ref]+'px';
	sy.left=xpos[ref]+'px';
    if (ie_version && ie_version<10) {
	  sy.filter="glow(color="+colour+",strength="+zpos[ref]+")";
	  sy.fontSize=30-zpos[ref]+"px";
	}
	else if (ie_version) {
	  sy.boxShadow="0px 0px 40px "+zpos[ref]+"px "+colour;
	}
	else {
	  sy.textShadow=colour+' 0px 0px '+zpos[ref]+'px';
	  sy.fontSize=40+zpos[ref]+'px';
	}
}

function jamjar(ref) {
	if (ypos[ref]+dy[ref]<-50 || ypos[ref]+dy[ref]>shigh) rejig(ref, 'y');
	ypos[ref]+=dy[ref];
	if (xpos[ref]+dx[ref]<-50 || xpos[ref]+dx[ref]>swide) rejig(ref, 'x');
	xpos[ref]+=dx[ref];
	if (zpos[ref]+dz[ref]<0 || zpos[ref]+dz[ref]>20) dz[ref]=-dz[ref];
	zpos[ref]+=dz[ref];
	set_blob(ref);
	setTimeout("jamjar("+ref+")", speed);
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)!="undefined" && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}
