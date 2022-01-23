// load library express
let express = require("express")

// inisiasi objek baru dari express
let app = express()

// setting agar bisa membaca data request dg format json
app.use(express.json())

app.post("/kubus", (request, response) => {
    let sisi = request.body.sisi

    let luas = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi

    return response.json({
        luas: luas,
        volume: volume
    })
})

//endpoint kedua
app.get("/balok/:panjang/:lebar/:tinggi", (request, response) => {
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    let volume = panjang * lebar * tinggi

    return response.json({
        message: `Luas permukaan balok adalah ${luas} dan volumenya adalah ${volume}`
    })
})

app.get("/limas/:tl/:ts/:sa", (request, response) => {
    let tl = request.params.tl
    let ts = request.params.ts
    let sa = request.params.sa

    let la = 1 * sa * ts /2 
    let luas = la + la + la + la
    let volume = 1 * la * tl / 3

    return response.json({
        message: `Luas permukaan limas segitiga adalah ${luas} dan volumenya adalah ${volume}`
    })
})

app.get("/tabung/:r/:t", (request, response) => {
    let r = request.params.r
    let t = request.params.t
    
    let phi = 3.14
    let luas = 2 * phi * r * (r + t)
    let volume = phi * r * r * t

    return response.json({
        message: `Luas permukaan tabung adalah ${luas} dan volumenya adalah ${volume}`
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})
