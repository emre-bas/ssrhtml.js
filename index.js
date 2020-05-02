jsdom = require("jsdom");
jquery = require("jquery");

var ssrhtml = (page,edit=()=>{})=>(req,res,next)=>{
	jsdom.JSDOM.fromFile(page)
	.then(async(dom) => {
		jquery(dom.window);
		await edit(dom);
		res.send(dom.serialize())
	})
}
module.exports = ssrhtml;