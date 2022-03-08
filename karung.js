const { response, request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is string

app.post("/netto",(request,response) => {
    let barang = 
})