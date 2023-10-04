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

<<<<<<< HEAD
>>>>>>> 933d819fb1dc45619aa66a3695b7a92bf162cf5a
=======
import professorRoute from './routes/professor.js'
app.use('/professor', professorRoute)

import alunoRoute from './routes/aluno.js'
app.use('/aluno', alunoRoute)

import turmaRoute from './routes/turma.js'
app.use('/turma', turmaRoute)

>>>>>>> 6d81181b0da9ab33581e41198f1e1b69b2d80d38
export default app;
