if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}

const axios = require("axios");
const FormData = require("form-data")

imageKit = async (req, res, next) => {
    try {
        const newForm = new FormData()
        const encodedFile = req.file.buffer.toString("base64")
        newForm.append("file", encodedFile)
        newForm.append("fileName", req.file.originalname)
        const encodedKey = Buffer.from(process.env.imageKitPrivate+":").toString("base64")
        const result = await axios({
            method: "POST",
            url: "https://upload.imagekit.io/api/v1/files/upload",
            data: newForm,
            headers: {
                ...newForm.getHeaders(),
                Authorization: `Basic ${encodedKey}`
            }
        })
        console.log(result)
        if (!result) {
            throw ({name: "Bad Request"})
        } else {
            req.body.fishImage = result.data.url
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = imageKit