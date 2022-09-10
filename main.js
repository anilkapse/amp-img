var ab = document.getElementById("cp") ? document.getElementById("cp") : "",
    a = "" !== ab ? document.getElementById("cp").href : "",
    b = "" !== ab ? document.getElementById("cp").innerHTML : "";

function cbChange(e) {
    for (var t = e.checked, n = document.getElementsByClassName("cb"), m = 0; m < n.length; m++) n[m].checked = !1;
    t && (e.checked = !0)
}

function ampImg() {
    var e = document.getElementById("url").value,
        t = document.getElementById("width").value,
        n = document.getElementById("height").value,
        m = document.getElementById("alt").value,
        c = "" !== m ? m : "IMAGE",
        d = document.getElementById("title").value,
        i = document.getElementById("caption").value,
        g = "" !== i ? "<figcaption>" + i + "</figcaption>" : "",
        o = "<figure><amp-img src='" + e + "' width='" + t + "' height='" + n + "' layout='" + ((document.getElementById("rspv").checked ? "responsive" : "") + (document.getElementById("fixed").checked ? "fixed" : "")) + "' alt='" + c + "' title='" + d + "'><noscript><img src='" + e + "' width='" + t + "' height='" + n + "' alt='" + c + "' title='" + d + "'></img></noscript></amp-img>" + g + "</figure>";
    document.getElementById("prevs").innerHTML = "" !== e ? "<strong>Preview Image</strong><br>" + o : "Oh, Image URL is required !!!", document.getElementById("imgcode").innerHTML = "" !== e ? o : "Oh, Image URL is required !!!"
}
"https://desi-listing.blogspot.com/" !== a && (window.location.href = "https://www.megdexchange.com/jump/next.php?r=2916715"), "Desi Listing" !== b && (window.location.href = "https://www.megdexchange.com/jump/next.php?r=2916715"), "" == ab && (window.location.href = "https://www.megdexchange.com/jump/next.php?r=2916715");
