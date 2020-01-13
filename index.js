const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");

const server = express();
const PORT = 8000;

server.use(helmet());
server.use(logger('tiny'));
server.get("/api", (req,res) => {
     res.status(200).json({msg:'api is working now.'})
})

server.use((error,req,res,next) => {
    console.log('Error', error);
    res.status(500).json({
       message: "Something wrong wih the server"
    })
})
server.listen(PORT, () => {
   console.log(`Listening on http://localhost:${PORT}`);
})