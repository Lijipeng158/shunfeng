const proxy = require("http-proxy-middleware");

module.exports=(app)=>{
    app.use("/api",proxy({
        target:"https://m.sfbest.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}