document.write('<script type="text/javascript" src="http://bpmaker.giffy.me/userdata/cmn/parts52.js?us=51672&id=37&bic=3&nc=0&im1=b1-1505547554.gif&im2=b2-1505547575.gif&im3=b3-1505547714.gif&c1=20&c2=3&c8=0"></script>');document.close();

function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")
