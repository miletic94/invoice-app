const express = require("express")
const app = express()
const data = require("./data.json")
const path = require("path")

app.use("/assets", express.static("assets"))

app.get("/invoices", (req, res) => {
    res.send(data)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    console.log(path.join(__dirname, "assets"))
})