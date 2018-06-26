var letters = "qwertyuiop";
var homerow = "hjkl";

var highlightedColumn = null;

$(document).ready(function() {
	//for each list of links
	$("#col1 li").each(function(index, li) {
		$(li).prepend(makeHeader(letters[index]));
	})
	$("#col2 li").each(function(index, li) {
		$(li).prepend(makeHeader(letters[index]));
	})
	$("#col3 li").each(function(index, li) {
		$(li).prepend(makeHeader(letters[index]));
	})
	$("#col4 li").each(function(index, li) {
		$(li).prepend(makeHeader(letters[index]));
	})

	weather();
})

function makeHeader(number) {
	return "<h2>"+number+"</h2>"
}

function ktos(key) {
	return String.fromCharCode((96 <= key && key <= 105)? key-48 : key)
}

//focus columns depending on the code
$(document).keydown(function(e) {
	var key = e.keycode || e.which;
	var keychar = ktos(key).toLowerCase();

	//esc
	if (key == 27) {
		hiClr();
	}

	if (homerow.includes(keychar)) {
		switch (keychar) {
			case "h":
				hiClr();
				hiCol("#col1");
				highlightedColumn = "#col1"
				break;
			case "j":
				hiClr();
				hiCol("#col2");
				highlightedColumn = "#col2"
				break;
			case "k":
				hiClr();
				hiCol("#col3");
				highlightedColumn = "#col3"
				break;
			case "l":
				hiClr();
				hiCol("#col4");
				highlightedColumn = "#col4"
				break;
		}
	}
	else if (letters.includes(keychar) && highlightedColumn != null) {
		var index = letters.indexOf(keychar)+1;
		var linkElement = $(highlightedColumn+" div ul li:nth-child("+index+")");
		linkElement.find("h2").addClass("highlight");
		var linkURL = linkElement.find("a").attr("href");
		if (linkURL != null && typeof(linkURL) != "undefined") {
			window.location = linkURL;
		}
	}
})

$("body").click(function() {
	hiClr();
})

function hiClr() {
	$("#links-container > div").removeClass("highlight");
	$("h2").removeClass("highlight");
	higlightedColumn = null;
}

function hiCol(objId) {
	$(objId).addClass("highlight")
}