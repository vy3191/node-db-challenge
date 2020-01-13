const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const projectRoutes = require("./routes/projects");

const server = express();
const PORT = 8000;

server.use(helmet());
server.use(logger('tiny'));
server.use(express.json());
server.use("/api/projects", projectRoutes);

server.use((error,req,res,next) => {
    console.log('Error', error);
    res.status(500).json({
       message: "Something wrong wih the server"
    })
})
server.listen(PORT, () => {
   console.log(`Listening on http://localhost:${PORT}`);
})