const fetch = require('node-fetch');
const next = require('next')
const bodyParser =  require('body-parser')
const express = require('express')
const app = express()

const mailgun = require("mailgun-js");
const DOMAIN = "sandboxfec1d1aeec324fab9eb7e04c789b4cf2.mailgun.org";
const mg = mailgun({apiKey: "967ec11b7c7e563a0d23177fbc34a157-87c34c41-3c2438fc", domain: DOMAIN});

app.use(bodyParser);
export default async (req, res) => {
    const complaint = req.body;
    const data = {
        from: '<weatherData@samples.mailgun.org>',
        to: 'olivernhuthpriority@gmail.com',
        subject: `Weather Complaint`,
        text: `From: ${complaint.name}, ${complaint.complaint}, ${complaint.email}`
    };
    mg.messages().send(data, (error, body) => {
        console.log(body);
        res.status(201);
        res.send('Success');
    });
    
}