var tocConfig = {
    url: "https://ashprincesskawaii.blogspot.com", // Ganti nilainya menjadi URL blog anda
    feedNum: 12, // Jumlah posting yang tampil
    numChars: 100, // Jumlah ringkasan posting
    thumbWidth: 40, // Ukuran thumbnail posting
    newTabLink: true, // Membuka link pada tab baru
    showDates: true, // Menampilkan tanggal publis
    labelName: false, // Menentukan label yang akan di tampilkan
    showSummaries: true, // Menampilkan ringkasan posting
    showThumbnails: true, // Menampilkan thumbnail posting
    navText: "Berikutnya &#9660;", // Memuat artikel lainnya
    frontText: "Kembali ke Awal &uArr;", // Artikel sudah mencapai batas
    moreText: "Selengkapnya &#9658;", // Readmore atau baca selengkapnya
    loading: "<span>Memuat Content...</span>", // Sedang memuat content
    searching: "<span>Mencari...</span>", // Sedang mencari content
    noResult: "Tak Ditemukan", // Content tidak di temukan
    loadCat: "Sedang Memuat Label...", // Memuat label
    resetCat: "Reset Ulang Category...", // Reset label
    noImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", // Artikel tanpa gambar
    monthNames: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"] // Bulan terbit artikel
};
var tocConfig_defaults = {
    url: "https://astinquery.blogspot.com",
    feedNum: 12,
    numChars: 100,
    thumbWidth: 40,
    newTabLink: true,
    showDates: false,
    labelName: false,
    showSummaries: false,
    showThumbnails: false,
    navText: "Berikutnya &#9660;",
    frontText: "Kembali ke Awal &uArr;",
    moreText: "Selengkapnya &#9658;",
    loading: "<span>Memuat Content...</span>",
    searching: "<span>Mencari...</span>",
    noResult: "Tak Ditemukan",
    loadCat: "Sedang Memuat Label...",
    resetCat: "Reset Ulang Category...",
    noImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
    monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
};
for (var i in tocConfig_defaults) {
    tocConfig_defaults[i] = (typeof (tocConfig[i]) !== undefined && typeof (tocConfig[i]) !== 'undefined') ? tocConfig[i] : tocConfig_defaults[i]
}

function getID(a) {
    return document.getElementById(a)
}
var head = document.getElementsByTagName('head')[0],
    tC = tocConfig_defaults,
    tocContainer = getID('feedContainer'),
    feedNav = getID('feedNav'),
    orderByer = getID('orderFeedBy'),
    labelSorter = getID('labelSorter'),
    input = getID('postSearcher').getElementsByTagName('input')[0],
    resultDesc = getID('resultDesc'),
    loadCat = getID('loadCat'),
    nextPage, feedArchive, startPage = 0,
    filter = 0,
    target = (tC.newTabLink) ? ' target="_blank"' : '',
    conFig = "\x68\x74\x74\x70\x3a\x2f\x2f\x61\x73\x74\x69\x6e\x71\x75\x65\x72\x79\x2e\x62\x6c\x6f\x67\x73\x70\x6f\x74\x2e\x63\x6f\x6d\x2f\x32\x30\x31\x34\x2f\x30\x38\x2f\x6d\x65\x6d\x62\x75\x61\x74\x2d\x64\x61\x66\x74\x61\x72\x2d\x69\x73\x69\x2d\x6b\x65\x72\x65\x6e\x2d\x70\x61\x64\x61\x2d\x62\x6c\x6f\x67\x2e\x68\x74\x6d\x6c";

function clickTab(pos) {
    var a = labelSorter.getElementsByTagName('ul'),
        b = a[0],
        c = b.getElementsByTagName('a');
    for (var u = 0; u < c.length; u++) {
        c[u].className = "";
        c[parseInt(pos, 10)].className = "active-tab"
    }
    for (var t = 0; t < a.length; t++) {
        a[t].className = "disabled";
        a[parseInt(pos, 10)].className = "disablet"
    }
}

function showLabels(json) {
    var cat = json.feed.category,
        skeleton = "";
    skeleton += "<ul id='labelSorter'>";
    for (var i = 0, cen = cat.length; i < cen; i++) {
        skeleton += "<li class='toc-tab-item-" + i + "'>";
        skeleton += "<a onclick='javascript:clickTab(" + i + ");' href='javascript:changeSort(\"" + decodeURIComponent(cat[i].term) + "\")' ";
        skeleton += "title='lihat post pada label \"" + decodeURIComponent(cat[i].term) + "\"'>" + cat[i].term.toUpperCase() + "</a>";
        skeleton += "</li>"
    }
    skeleton += "<li><a href='" + conFig + "' " + target + ">Get Widget</a></li>";
    skeleton += "</ul>";
    labelSorter.innerHTML = skeleton;
    loadCat.innerHTML = "<li class='toc-tab-item-01'><a class='allowed' href='javascript:poid(0)'>" + tC.loadCat + "</a></li>"
}

function showFeedList(json) {
    var entries = json.feed.entry,
        postTitle, postUrl, postImage, postContent, commentNum, pub, date, month, skeleton = "";
    if (json.feed.entry) {
        for (var i = 0; i < tC.feedNum; i++) {
            if (i == json.feed.entry.length) {
                break
            }
            for (var j = 0, jen = entries[i].link.length; j < jen; j++) {
                if (entries[i].link[j].rel == 'alternate') {
                    postUrl = entries[i].link[j].href;
                    break
                }
            }
            for (var k = 0, ken = json.feed.link.length; k < ken; k++) {
                if (json.feed.link[k].rel == 'next') {
                    nextPage = json.feed.link[k].href
                }
            }
            for (var l = 0, len = entries[i].link.length; l < len; l++) {
                if (entries[i].link[l].rel == 'replies' && entries[i].link[l].type == 'text/html') {
                    commentNum = entries[i].link[l].title;
                    break
                }
            }
            postTitle = entries[i].title.$t;
            pub = entries[i].published.$t;
            month = tC.monthNames;
            postContent = ("summary" in entries[i] && tC.showSummaries === true) ? entries[i].summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<(.*?)>/g, "").replace(/<iframe/ig, "").substring(0, tC.numChars) : "";
            postImage = ("media$thumbnail" in entries[i] && tC.showThumbnails === true) ? entries[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/, "\/s" + tC.thumbWidth + "-c") : tC.noImage.replace(/\/s[0-9]+\-c/, "\/s" + tC.thumbWidth + "-c");
            date = (tC.showDates) ? "<time datetime='" + pub + "' title='" + pub + "'>" + pub.substring(8, 10) + " " + month[parseInt(pub.substring(5, 7), 10) - 1] + " " + pub.substring(0, 4) + "</time>" : "";
            skeleton += "<li title='" + postTitle + "'";
            skeleton += (tC.showSummaries) ? " class='bold'" : "";
            skeleton += "><a class='item-title' href='" + postUrl + "'" + target + ">" + postTitle + "";
            skeleton += (tC.showSummaries !== true) ? "" + date + "" : "";
            skeleton += "</a>";
            skeleton += (tC.showSummaries) ? "<span class='summary'><img class='thumbnail' style='width:" + tC.thumbWidth + "px;height:" + tC.thumbWidth + "px;' src='" + postImage + "' alt='" + postTitle + "' />" + postContent + "<span style='display:block;clear:both;'></span></span>" : "";
            skeleton += (tC.showSummaries) ? "<div class='itemfoot'>" + commentNum + "<a class='itemrmore' href='" + postUrl + "'" + target + ">" + tC.moreText + "</a></div>" : "";
            skeleton += "</li>"
        }
        skeleton += "<div style='clear:both;'></div>";
        resultDesc.innerHTML = (input.value !== '' && filter == 'search') ? "<span>Kata kunci <strong>&#8220;" + input.value + "&#8221;</strong> (" + json.feed.openSearch$totalResults.$t + " Temuan)</span>" : "Total: " + json.feed.openSearch$totalResults.$t + " Artikel";
        feedContainer.innerHTML += (nextPage) ? skeleton : "";
        if (nextPage && filter != 'search') {
            skeleton = (filter !== 0) ? "<a href='javascript:initResult(2);' class='next'>" + tC.navText + "</a>" : "<a href='javascript:initResult(1);' class='next'>" + tC.navText + "</a>"
        } else {
            skeleton = "<a href='javascript:changeSort(0);' class='front'>" + tC.frontText + "</a>";
            clickTab(0)
        }
        feedNav.innerHTML = skeleton;
        loadCat.innerHTML = "<li class='toc-tab-item-01'><a class='allowed' href='javascript:poid(0)'>" + tC.loadCat + "</a></li>";
        input.value = '';
        labelSorter.getElementsByTagName('ul')[0].removeAttribute('class');
        orderByer.removeAttribute('disabled')
    } else {
        if (filter == 'search') {
            feedContainer.innerHTML = "";
            resultDesc.innerHTML = "";
            alert(tC.noResult)
        }
        feedNav.innerHTML = "<a href='javascript:changeSort(0);' class='front'>" + tC.frontText + "</a>";
        loadCat.innerHTML = "<li class='toc-tab-item-01'><a class='allowed' href='javascript:poid(0)'>" + tC.resetCat + "</a></li>";
        clickTab(0)
    }
}

function initResult(archive) {
    var p, param;
    if (archive == 1) {
        p = nextPage.indexOf("?");
        param = nextPage.substring(p)
    } else if (archive == 2) {
        p = nextPage.indexOf("?");
        param = nextPage.substring(p).replace(/\?/, '/-/' + filter + '?')
    } else {
        param = "?start-index=1&max-results=" + tC.feedNum + "&orderby=" + orderByer.value + "&alt=json-in-script"
    }
    param += "&callback=showFeedList";
    updateScript(param)
}

function removeScript() {
    var old = getID('temporer-script');
    old.parentNode.removeChild(old)
}

function buildLabels() {
    var s = document.createElement('script');
    s.type = "text/javascript";
    s.src = tC.url + "/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels";
    head.appendChild(s)
}

function updateScript(tail) {
    if (startPage == 1) {
        removeScript();
        startPage = 1
    }
    feedNav.innerHTML = tC.loading;
    feedArchive = (tC.labelName !== false) ? tC.url + "/feeds/posts/summary/-/" + tC.labelName + tail : feedArchive = tC.url + "/feeds/posts/summary" + tail;
    var toc_script = document.createElement('script');
    toc_script.type = 'text/javascript';
    toc_script.src = feedArchive;
    toc_script.id = 'temporer-script';
    head.appendChild(toc_script)
}

function changeSort(label) {
    removeScript();
    tocContainer.innerHTML = "";
    resultDesc.innerHTML = "Menghitung artikel&hellip;";
    feedNav.innerHTML = tC.loading;
    var newScript = document.createElement('script'),
        labSorter = labelSorter.getElementsByTagName('ul')[0],
        l = (label !== 0) ? '/-/' + label : "";
    newScript.type = 'text/javascript';
    newScript.id = 'temporer-script';
    newScript.src = tC.url + '/feeds/posts/summary' + l + '?alt=json-in-script&max-results=' + tC.feedNum + '&orderby=' + orderByer.value + '&callback=showFeedList';
    head.appendChild(newScript);
    labSorter.disabled = true;
    orderByer.disabled = true;
    filter = label
}

function searchPost() {
    removeScript();
    tocContainer.innerHTML = "";
    resultDesc.innerHTML = "";
    feedNav.innerHTML = tC.searching;
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.id = 'temporer-script';
    newScript.src = tC.url + '/feeds/posts/summary?alt=json-in-script&orderby=published&q=' + input.value + '&max-results=9999&callback=showFeedList';
    head.appendChild(newScript);
    filter = 'search';
    return false
}
getID('postSearcher').onsubmit = searchPost;
orderByer.onchange = function () {
    changeSort(0);
    clickTab(0)
}
initResult(0);
buildLabels();