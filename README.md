# SSRHTML.js

> Server Side Rendering HTML Tool for Express.

example : 
```
app.get("/", ssrhtml("ui/public/index.html", (dom)=>{
	dom.window.$("title").html("New Page Title")
}))
```