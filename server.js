import express from 'express';
import cors from 'cors';
import helloController  from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import tuitsController  from "./controllers/tuits-controller.js";
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(4000);