const express =  require("express");
const BodyParse = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3977;

app.use(BodyParse.urlencoded({ extended: true }));
app.use(BodyParse.json());

app.get("/", (req, res) => {
    res.status(200).send({ msg:"Hola Tincode" });
});

app.post("/post", (req, res) => {
    const { username } = req.body;
    res.status(200).send({ msg: `Hola, ${username}` });
});

app.listen(PORT, () => {
    console.log(`Tu server esta listo en el puerto ${PORT}`); 
});