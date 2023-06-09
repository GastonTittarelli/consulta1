import express from "express";
import productRouter from "./src/routes/products.js";
import cartRouter from "./src/routes/cart.js";
import handlebars from "express-handlebars";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", "/views");
app.set("view engine", "handlebars")

app.get("/hbs", (req, res) => {
    let product = {
        name: "Coca Cola",
        price: 100,
    }

    res.render("productos", product);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${server.address().port}`))
server.on("error", error => console.log(error))

