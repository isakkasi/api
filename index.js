const mongoose = require("mongoose");
const express = require("express");

const { cors } = require("./src/middlewares/corsMiddleware");
const { auth } = require("./src/middlewares/authMiddleware");
const router = require("./src/routes/router");

// this.log = console.log.bind( console, '[' + new Date().toLocaleString('en-GB') + ']' );

async function start() {
    try {
        // const db = await mongoose.connect("mongodb://localhost:27017/exam-question");
        const db = await mongoose.connect("mongodb+srv://qdb:Amentia6J3@qdb.kxljedn.mongodb.net/?retryWrites=true&w=majority");

        console.log(date() + "DB Ready");
    } catch (err) {
        console.log(date() + "Error connecting to database");
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(auth());

    app.use(router);

    app.listen(process.env.PORT || 5000, () => console.log(date() + `REST Service started on port ${process.env.PORT || 5000}`));
}

start();

const date = () => {
    return "[" + new Date().toLocaleString("en-GB") + "] ";
};
