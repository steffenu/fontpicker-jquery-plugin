/* single item From the complete font list
* https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_KEY
    {
      "family": "Advent Pro",
      "variants": [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700"
      ],
      "subsets": [
        "greek",
        "latin",
        "latin-ext"
      ],
      "version": "v11",
      "lastModified": "2020-09-02",
      "files": {
        "100": "http://fonts.gstatic.com/s/adventpro/v11/V8mCoQfxVT4Dvddr_yOwjVmtLZxcBtItFw.ttf",
        "200": "http://fonts.gstatic.com/s/adventpro/v11/V8mDoQfxVT4Dvddr_yOwjfWMDbZyCts0DqQ.ttf",
        "300": "http://fonts.gstatic.com/s/adventpro/v11/V8mDoQfxVT4Dvddr_yOwjZGPDbZyCts0DqQ.ttf",
        "regular": "http://fonts.gstatic.com/s/adventpro/v11/V8mAoQfxVT4Dvddr_yOwtT2nKb5ZFtI.ttf",
        "500": "http://fonts.gstatic.com/s/adventpro/v11/V8mDoQfxVT4Dvddr_yOwjcmODbZyCts0DqQ.ttf",
        "600": "http://fonts.gstatic.com/s/adventpro/v11/V8mDoQfxVT4Dvddr_yOwjeWJDbZyCts0DqQ.ttf",
        "700": "http://fonts.gstatic.com/s/adventpro/v11/V8mDoQfxVT4Dvddr_yOwjYGIDbZyCts0DqQ.ttf"
      },
      "category": "sans-serif",
      "kind": "webfonts#webfont"
    },

*/

/*  Obect that needs to be genearted for ADOBE
  
var __adobeFonts = {
// This list was last updated on December 8, 2020
ABeeZee: {
  category: "sans-serif",
  variants: "400,400i",
  subsets: "latin",
},
Abel: {
  category: "sans-serif",
  variants: "400",
  subsets: "latin",
},        
  */

/*  FONT FAMILY MAIN
* https://typekit.com/api/v1/json/families/social-gothic


{
    "family": {
        "id": "bpdp",
        "name": "Social Gothic",
        "slug": "social-gothic",
        "web_link": "http://typekit.com/fonts/social-gothic",
        "browse_info": {
            "capitals": [
                "uppercase-lowercase"
            ],
            "classification": [
                "decorative"
            ],
            "contrast": [
                "low"
            ],
            "language": [],
            "number_style": [
                "uppercase"
            ],
            "recommended_for": [],
            "weight": [
                "heavy",
                "regular"
            ],
            "width": [
                "condensed"
            ],
            "x_height": []
        },
        "css_stack": "sans-serif",
        "description": null,
        "foundry": {
            "name": "Canada Type",
            "slug": "canada-type"
        },

*/

// ADOBE FONT FAMILY VARIANT
/*  A single variation of a font (n4 of social gothic)
# https://typekit.com/api/v1/json/families/social-gothic/n4
{
    "variation": {
        "id": "bpdp:n4",
        "name": "Social Gothic Regular",
        "family": {
            "id": "bpdp",
            "link": "/api/v1/json/families/bpdp",
            "name": "Social Gothic"
        },
        "font_style": "normal",
        "font_variant": "normal",
        "font_weight": "400",
        "foundry": {
            "name": "Canada Type",
            "slug": "canada-type"
        },
        "libraries": [
            {
                "id": "full",
                "link": "/api/v1/json/libraries/full",
                "name": "Full Library"
            }
        ],
        "postscript_name": "SocialGothic-Regular"
    }
}
*/

// NOTE
//  "css_stack": "sans-serif", from https://typekit.com/api/v1/json/families/social-gothic
// "font_weight": "400",  from https://typekit.com/api/v1/json/families/social-gothic/n4

/* 

ABeeZee: {
  category: "sans-serif",
  variants: "400,400i",
  subsets: "latin",   // not available in adobe hardcode to latin doesnt matter anway ;) 
},
*/

/*  Extracting the font donwload link with css parser
https://github.com/sabberworm/PHP-CSS-Parser


@import url("https://p.typekit.net/p.css?s=1&k=ewa3sph&ht=tk&f=218.35121.35124.35125.35126.35127.5165.5352.37638&a=28148133&app=typekit&e=css");

@font-face {
font-family:"stud";
src:url("https://use.typekit.net/af/cfef3d/0000000000000000773595c5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cfef3d/0000000000000000773595c5/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cfef3d/0000000000000000773595c5/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
}
*/

function Fontpicker() {
	Fontpicker.prototype = {
		KitObjects: function () {
			let salsarico = {
				kit: {
					id: "ewa3sph",
					name: "Salsarico",
					analytics: false,
					domains: ["f"],
					families: [
						{
							id: "bpdp",
							name: "Social Gothic",
							slug: "social-gothic",
							css_names: ["social-gothic"],
							css_stack: '"social-gothic",sans-serif',
							subset: "default",
							variations: ["n4", "n7"],
						},
						{
							id: "hbhv",
							name: "Social Gothic Soft",
							slug: "social-gothic-soft",
							css_names: ["social-gothic-soft"],
							css_stack: '"social-gothic-soft",sans-serif',
							subset: "default",
							variations: ["n7"],
						},
						{
							id: "mbhp",
							name: "FF Folk Rough",
							slug: "ff-folk-rough",
							css_names: ["ff-folk-rough"],
							css_stack: '"ff-folk-rough",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "qfxd",
							name: "Stud",
							slug: "stud",
							css_names: ["stud"],
							css_stack: '"stud",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "rnjs",
							name: "FF Folk",
							slug: "ff-folk",
							css_names: ["ff-folk"],
							css_stack: '"ff-folk",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "szwv",
							name: "Social Gothic Rough",
							slug: "social-gothic-rough",
							css_names: ["social-gothic-rough"],
							css_stack: '"social-gothic-rough",sans-serif',
							subset: "default",
							variations: ["n7"],
						},
						{
							id: "ttlj",
							name: "Battery Park",
							slug: "battery-park",
							css_names: ["battery-park"],
							css_stack: '"battery-park",sans-serif',
							subset: "default",
							variations: ["n4"],
						},
						{
							id: "xzwq",
							name: "Social Gothic Stencil",
							slug: "social-gothic-stencil",
							css_names: ["social-gothic-stencil"],
							css_stack: '"social-gothic-stencil",sans-serif',
							subset: "default",
							variations: ["n7"],
						},
					],
					optimize_performance: false,
				},
			};
			return salsarico;
		},
	};
}

/* 
Erst seit Es6 gibt es Klassen in form von "Syntactic Sugar".
Davor musste man Sachen wie Vererbung über den "Protoyp" regeln.

Warum tun wir uns das an :D ? Alter Code existiert..

Nutze aber definitv Klassen. 
So muss man nicht exra umdenken.

Genauso wie man heutzutage async await nutzt und nicht mehr "callback hell" :D.

*/

// FONTPICKER Instanz
let __Fontpicker = new Fontpicker();
console.log("Fontpicker:", __Fontpicker);

// Adding a function to the Fontpicker class prototype
Fontpicker.prototype.AddedFunction = function () {
	return "some Function ;)";
};
console.log(__Fontpicker, "Fontpicker Object");

// Executing the Function from the prototype
console.log(Fontpicker.prototype.AddedFunction(), "Executing AddedFunction");

// Über Den Prototype des constructurs unsere instanz  AddedFunction ausführen
console.log(__Fontpicker.constructor.prototype.AddedFunction(), "Executing ");

var prototype = Object.getPrototypeOf(__Fontpicker);

console.log(prototype, "proto");

function somefunction() {
	let somevalue = "123";
	let somevalue2 = "456";

	return somevalue;
}

console.log("somefunction:", somefunction.prototype);
