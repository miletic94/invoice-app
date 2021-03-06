const express = require("express")
const app = express()
const data = require("./data.json")
const path = require("path")

app.use("/assets", express.static("assets"))

app.get("/api/invoices", (req, res) => {
    res.send(data)
})

app.get("/api/invoices/:id", (req, res) => {
    const response = data.find(item => item.id === req.params.id)
    if(response) {
        res.send(response)
        return
    } 
    res.status(404).send("Invoice not found.")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    console.log(path.join(__dirname, "assets"))
})