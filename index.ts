import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import commentController from "./controllers/commentController";
import articleController from "./controllers/articleController";

mongoose.connect("mongodb+srv://reiopoldmaa:FcLSNRSk8PpndDpc@cluster0.rap2c.mongodb.net/test");
const database = mongoose.connection;

const app: Express = express();

app.use(express.json());
app.use(commentController);
app.use(articleController);

database.on('error', (error) => {
    console.log(error)
})
  
database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});