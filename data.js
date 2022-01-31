const { response, request } = require("express")
const express = require("express")
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is string

app.post("/data",(request,response) => {
    let data = [
        {nis: 101, nama: "Adinda", alamat: "Araya"},
        {nis: 102, nama: "Amanda", alamat: "Sawojajar"},
        {nis: 103, nama: "Amelia", alamat: "Malang"},
        {nis: 104, nama: "Andhika", alamat: "Sawojajar"},
        {nis: 105, nama: "Ardhian", alamat: "Blimbing"},
        {nis: 106, nama: "Aulia", alamat: "Araya"},
        {nis: 107, nama: "Bashar", alamat: "Gadang"},
        {nis: 108, nama: "Deazard", alamat: "Sawojajar"},
        {nis: 109, nama: "Debi", alamat: "Blimbing"},
        {nis: 110, nama: "Dhea", alamat: "Tuban"}
    ]

    let hasil = []
        let jumlah=0;

        for(let i= 0; i< data.length; i++){
            if (keyword == data[i].nis || keyword == data[i].nama || keyword == data[i].alamat) {
                jumlah_data += 1
                hasil.push(
                    data[i]
                )
            }
        }
        return response.json({
            "Jumlah Data" : jumlah_data,
            "Data " : hasil
    
        })
        
    


})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})