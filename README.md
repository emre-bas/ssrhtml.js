# SSRHTML.js

> Server Side Rendering HTML Tool for Express.

> With jQuery support.

---

Example (HTML file) : 
```
app.get("/", ssrhtml("ui/public/index.html", (dom)=>{
	dom.window.$("title").html("New Page Title")
}))
```

Example (HTML code) : 
```
app.get("/", ssrhtml("<html><head><title>Page Title</title></head><body>...</body></html>", (dom)=>{
	dom.window.$("title").html("New Page Title")
}))
```