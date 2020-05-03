//  SSRHTML.js
//	> Server Side Rendering HTML Tool for Express.

jsdom = require("jsdom");
jquery = require("jquery");

var ssrhtml = (html, edit=()=>{}) => (req,res,next) => {
	if(html[0]=="<") var getDom = async function(){ return new jsdom.JSDOM(html) }();
	else var getDom = jsdom.JSDOM.fromFile(html);
	getDom.then(async(dom) => {
		jquery(dom.window);
		dom = await edit(dom)||dom;
		res.send(dom.serialize())
	})
	.catch(console.error)
}

module.exports = ssrhtml;