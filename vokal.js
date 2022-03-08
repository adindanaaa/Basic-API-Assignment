const { response, request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is string

app.post("/vokal", (request, response) => {
    let word = request.body.word
    
    let vokal = ["a", "i", "u", "e", "o"]
    let konsonan = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", 
    "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    let jml_vokal = 0;
    let jml_konsonan = 0;

    for (let i = 0; i < word.length; i++) {
        if (vokal.includes(word) && konsonan.includes(word)) {
            jml_vokal += 1
            jml_konsonan += 1
        }
    }

    return response.json({
        "Jumlah vokal" : jml_vokal,
        "Jumlah konsonan" : jml_konsonan
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})