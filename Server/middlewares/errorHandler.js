errorHandler = (err, req, res, next) => {
    switch(err.name) {
        case "Bad Request": 
        res.status(400).json({message: "Bad Request!"});
        break
        case "Not Found": 
        res.status(404).json({message: "Not Found!"});
        break
        default: 
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = errorHandler