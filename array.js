const { response, request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is string

app.post("/ages",(request,response) => {
    //store the request data
    let data = request.body.ages
    let jmlRemaja = 0, jmlTua = 0, jmlDewasa = 0

    for (let i = 0; i < data.length; i++) {
        if(data[i].umur >= 12 && data[i].umur <= 24){
            jmlRemaja+=1
        }
        if(data[i].umur >= 25 && data[i].umur <= 55){
            jmlDewasa+=1
        }
        if(data[i].umur > 55){
            jmlTua+=1
        }
    }

    //give a response data
    return response.json({
        "jumlah_remaja" : jmlRemaja,
        "jumlah_dewasa" : jmlDewasa,
        "jumlah_tua" : jmlTua
    })
})

// endpoint kedua
// menampung data variable
app.post("/belanja",(request,response) => {
    let data = request.body.belanja
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].harga * data[i].jumlah
    }

    let ppn = total * 10/100;
    total += ppn;

    return response.json({
        "Total Belanja" : total
    })
})

// endpoint ketiga
app.post("/uang", (request, response) => {
    let uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500]
    let butuhUang = request.body.butuhUang
    let hasil = []

    for (let i = 0; i < uang.length; i++) {
        if (butuhUang >= uang[i]) {
            let jmlUang = Math.floor(butuhUang/uang[i])
            butuhUang -= (jmlUang * uang[i])

            hasil.push({
                pecahan : uang[i],
                jumlah : jmlUang
            })
        }
    }


    return response.json({
        hasil_pecahan : hasil
    })
})


app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})