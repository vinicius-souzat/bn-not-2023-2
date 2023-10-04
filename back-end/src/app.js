import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

<<<<<<< HEAD
=======
/*********************************************/
// ROTAS DA APLICAÇÃO BACK-END

import cursoRoute from './routes/curso.js'
app.use('/curso', cursoRoute)

>>>>>>> 933d819fb1dc45619aa66a3695b7a92bf162cf5a
export default app;
