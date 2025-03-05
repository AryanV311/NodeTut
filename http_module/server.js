const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("welcome to the new server")
        res.end()
    }

    if(req.url === "/about"){
        res.setHeader("Content-Type","text/html")
        res.write("<p>Hello im a beginner progammer and this is my tutorial of node js.</p>")
    }
})



const PORT = 3000
server.listen(PORT, () => {
    console.log(`server running oh http://localhost:${PORT}`);
})