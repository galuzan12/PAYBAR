const express = require('express');
const bodyParser = require('body-parser');
const PORT = 1000;
const mongoose = require('mongoose');

const Resturant = require('./Models/ResturantModel');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());

app.get('/', async (req, res) => {

    try {
        let resturnt1 = new Resturant({ name: "aa", size: "bb" });
        const result = await resturnt1.save();
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }


    res.send('Hello World!')
});

mongoose.connect(
    `mongodb+srv://paybar:${process.env.MONGODB_PASSWORD}@cluster0.xrvz4.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });
    })
