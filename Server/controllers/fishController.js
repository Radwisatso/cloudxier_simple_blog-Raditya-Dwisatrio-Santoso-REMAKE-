const { Fish } = require("../models")

class FishController {

    static async getFish(req, res, next) {
        try {
            const result = await Fish.findAll()
            if (!result) {
                throw ({name: "Not Found"})
            } else {
                res.status(200).json(result)
            }
        } catch (err) {
            next(err)
        }
    }

    static async getFishById(req, res, next) {
        try {
            const result = await Fish.findByPk(+req.params.id)
            if (!result) {
                throw ({name: "Not Found"})
            } else {
                res.status(200).json(result)
            }
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async addFish(req, res, next) {
        const { name, description, habitat, population } = req.body
        try {
            const result = await Fish.create({
                name: name,
                description: description,
                habitat: habitat,
                image: req.body.fishImage,
                population: population
            })
            if (!result) {
                throw ({name: "Bad Request"})
            } else {
                res.status(201).json({message: "Fish has been added", fish: result})
            }
        } catch (err) {
            next(err)
        }
    }

    static async updateFish(req, res, next) {
        const { name, description, habitat, population } = req.body
        try {
            const findId = await Fish.findOne({where: {id: +req.params.id}})
            if (!findId) {
                throw ({name: "Not Found"})
            } else {
                const result = await Fish.update({
                    name: name,
                    description: description,
                    habitat: habitat,
                    image: req.body.fishImage,
                    population: population
                }, {
                    where: {id: findId.id},
                    returning: true
                })
                if (!result || !result[1][0]) {
                    throw ({name: "Bad Request"})
                } else {
                    res.status(200).json(result[1][0])
                }
            }
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async deleteFish(req, res, next) {
        console.log(req.params.id)
        try {
            const deletedFish = await Fish.findByPk(+req.params.id)
            if (!deletedFish) {
                throw ({name: "Not Found"})
            } else {
                await Fish.destroy({
                    where: {
                        id: deletedFish.id
                    }
                })
                res.status(200).json({message: `Fish with id ${deletedFish.id} has been removed!`})
            }
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}
module.exports = FishController