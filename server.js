import express from 'express';
import cors from 'cors';
import helloController  from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController  from "./controllers/tuits-controller.js";
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(4000);