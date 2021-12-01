document.addEventListener("DOMContentLoaded", function (event) {
	//console.log("DOM fully loaded and parsed");

	// Nur auf der bearbeitungsseite das script starten ;)
	// sonst läuft es in der listenansischt ;)
	if (document.getElementById("ctrl_selectField")) {
		Observe_Fontpicker();

		//app();
		// FONT Picker auf Input Felder anwenden.

		// Need to go 1 by 1 sodass zweites item nicht weitere request machen muss.
		// https://stackoverflow.com/a/3244411
		// you can acces global variable from another script if its loaded before in the dom
		jQuery("#ctrl_heading_1").fontpicker();
	} else {
		console.log("Listenansicht , kein Script Start");
	}

	//jQuery("input#ctrl_unique_url").fontpicker();
});

// This Observer Starts adding all remaining Font Pickers
// after the first one was added ...
// The first picker does alot of request , all following fontpickers can use the data of the first fontpicker.
// THIS IS ALSO WHY THE TOOL normally has HARDCODED values... otherwise multople fontpickers
// would always make multiple request.
// Values cant be hardcorded here because this tool is supposed to get up to date data.....
function Observe_Fontpicker() {
	// zu überwachende Zielnode (target) auswählen
	var target = document.querySelector("#ctrl_heading_1");

	// eine Instanz des Observers erzeugen
	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			console.log(mutation);
			// später: Observation wieder einstellen
			console.log(
				"########################## Observer STOPPED ##########################"
			);
			observer.disconnect();

			jQuery("#ctrl_heading_2").fontpicker();
			jQuery("#ctrl_heading_3").fontpicker();
			jQuery("#ctrl_heading_4").fontpicker();
			jQuery("#ctrl_heading_5").fontpicker();
			jQuery("#ctrl_heading_6").fontpicker();
			jQuery("#ctrl_paragraph").fontpicker();
			jQuery("#ctrl_strong").fontpicker();

			// adds Font to list items ( ADOBE)
			FixStyleTag();
			AddKitCssToHead();
		});
	});

	// Konfiguration des Observers: alles melden - Änderungen an Daten, Kindelementen und Attributen
	var config = { attributes: true, childList: true, characterData: true };

	// eigentliche Observierung starten und Zielnode und Konfiguration übergeben
	observer.observe(target, config);
}

// HOTFIX
// the google implementation adds a style tag like so :
// style="font-family: "FF Meta Pro";"
// This is not the correct format we need for a adobe font family
// which is style="font-family: "ff-meta-pro";"
// or class = "tk-ff-meta-pro"
// for every adobe list item reformaat it ;) by using the  data-font-family="FF Meta Pro" attribute
function FixStyleTag() {
	/* 
  1. Select the fp-divier with text Adobe Font
  2. Select all following items until we find class fp-divider with text google
  */

	let kit_id = global_kit_object;

	let node_list = document.querySelectorAll("li[data-font-type='adobe']");
	console.log("node_list:", node_list);

	console.log("global_kit_object", global_kit_object["families"]);

	for (const item of global_kit_object["families"]) {
		for (const node of node_list) {
			// FF Meta Pro
			let fontname = node.attributes["data-font-family"].value;
			//console.log("fontname:", fontname, "itemName", item["name"]);
			if (fontname == item["name"]) {
				//node.classList.add(`${item['css_stack']}`);
				// set font family of list item <li>
				node.style.fontFamily = item["css_names"][0];
				node.classList.add(item["css_names"][0]);
				console.log(
					"######## APPLIED ############",
					item["css_names"][0]
				);
			}
		}
	}

	/*     let fontname_lowercase = fontname.toLowerCase();
    let fontname_kebabcase = fontname_lowercase.replace(/\s/g, "-");
    console.log("fontname_kebabcase:", fontname_kebabcase);

    item.classList.add(`tk-${fontname_kebabcase}`); */
}

async function FontFaceCSS(kit_id) {
	let base_url = `https://use.typekit.net/${kit_id}.css`;

	const response = await fetch(base_url, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
	});

	// response.text also return a Promise
	const text = await response.text();

	//console.log(text);

	return text;
}

async function ApplyFontFaceCSS(FontFaceCSS) {
	//console.log("ran", kit_css);

	// Creating style tag  and add to head
	var style = document.createElement("style");
	style.type = "text/css";
	let lit = `${FontFaceCSS}`;
	style.innerHTML = lit;
	document.getElementsByTagName("head")[0].appendChild(style);
}

async function AddKitCssToHead() {
	// global_kit gets set in jquery.fontpicker.js
	let kit_id = global_kit_id;
	let fontfacecss = await FontFaceCSS(kit_id);
	let applyfontfacecss = ApplyFontFaceCSS(fontfacecss);
}
