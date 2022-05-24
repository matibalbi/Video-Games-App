const axios = require("axios");
const {Op} = require('sequelize');
const {Videogame, Genre} = require("../db");
require('dotenv').config();
const {API_KEY} = process.env;

async function getVideogames (req, res, next) {
    const {game} = req.query
    try {
        let videogamesAPI = game
        ? (await axios(`https://api.rawg.io/api/games?search=${game}&key=${API_KEY}`)).data.results
        : (await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results
        videogamesAPI = videogamesAPI.map(e => ({name: e.name, image: e.background_image, genres: e.genres.map(e => e.name)}))
        
        let videogamesDB = game
        // ? await Videogame.findAll({where: {name: {[Op.substring]: [game]}}, include: Genre})
        ? await Videogame.findAll({where: {name: {[Op.iLike]: `%${game}%`}}, include: Genre})
        : await Videogame.findAll({include: Genre})
        videogamesDB = videogamesDB.map(e => ({name: e.name, genres: e.genres}))
        
        // let videogames = videogamesAPI.concat(videogamesDB)
        let videogames = videogamesDB.concat(videogamesAPI)
        if (!videogames.length) res.status(404).send("No videogames found")
        if (game && videogames.length > 15) videogames.splice(15)
        res.send(videogames)
    } catch (error) {
        next(error)
    }
}

async function getVideogameByID (req, res, next) {
    const {id} = req.params
    let videogame
    try {
        videogame = (await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
        videogame = {
            name: videogame.name,
            image: videogame.background_image,
            genres: videogame.genres,
            description: videogame.description,
            released: videogame.released,
            rating: videogame.rating,
            platforms: videogame.platforms
        }
        res.send(videogame)
    } catch (error) {
        try {
            videogame = await Videogame.findOne({
                where: {
                    id
                },
                include: Genre
            })
            res.send(videogame)
        } catch (error) {
            res.status(404).send(`No videogame found with id ${id}`)
        }
    }
}

async function postVideogame (req, res, next) {
    let {name, genres, description, released, rating, platforms} = req.body
    if (!name || !genres || !description || !platforms) return res.status(404).send("Some mandatory data is missing")
    platforms = platforms.join(", ")
    try {
        const newVideogame = await Videogame.create({name, description, released, rating, platforms})
        if (genres.length) {
            let arrPromises = genres.map(e => {
                return Genre.findOne({
                    where: {
                        name: e
                    }
                })
            })
            await Promise.all(arrPromises)
            console.log(arrPromises)
            let arrPromises2 = arrPromises.map(e => {
                return newVideogame.addGenre(e.id)
            })
            await Promise.all(arrPromises2)
            console.log(arrPromises2)
        }
        res.status(201).send(newVideogame);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getVideogames,
    getVideogameByID,
    postVideogame
}