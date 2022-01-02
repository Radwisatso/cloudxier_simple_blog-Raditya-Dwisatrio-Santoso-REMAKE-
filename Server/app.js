if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const router = require("./routes/index")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${port}`)
})
