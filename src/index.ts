import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import stolikiRoutes from "../Routes/Stoliki";
import restauracjeRoutes from "../Routes/Restauracje"
import pracownikRoutes from "../Routes/Pracownik"
import danieRoutes from "../Routes/Danie"
import rezerwacjaRoutes from "../Routes/Rezerwacja"
import produktRoutes from "../Routes/Produkty"
import zamowienieRoutes from "../Routes/Zamowienia"

const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

const dbURI =
  "mongodb+srv://admin:admin@cluster0.b34hmvd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result:any) => console.log("Connected to Mongoose: " + app.listen(8000)))
    .catch((err:any) => console.log("Failed to connect to Mongoose: " + err))

app.use(bodyParser.json());

app.use("/stoliki", stolikiRoutes);
app.use("/restauracje", restauracjeRoutes);
app.use("/pracownicy", pracownikRoutes);
app.use("/dania", danieRoutes);
app.use("/rezerwacje", rezerwacjaRoutes);
app.use("/produkty", produktRoutes);
app.use("/zamowienia", zamowienieRoutes);



app.get("/", function (req: Request, res: Response) {
  res.send("Witaj w API restauracji");
});
