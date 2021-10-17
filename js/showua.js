function showuseragent() {
	if (document.getElementById("useragent") == null) {
		return 0
	} else {
		document.getElementById("useragent").innerHTML = navigator.userAgent;
	}
}

