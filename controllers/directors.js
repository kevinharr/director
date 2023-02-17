
const { Director, Movie } = require("../models")

const create = async (req, res) => {
    try {
      const director = await Director.create(req.body)
      res.status(200).json(director)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const index = async (req, res) => {
    try {
      const directors = await Director.findAll()
      res.status(200).json(directors)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const update = async (req, res) => {
    try {
      const director = await Director.update(
        req.body,
        { where: { id: req.params.id }, returning: true }
      )
      res.status(200).json(director)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const deleteDirector = async (req, res) => {
    try {
      const director = await Director.findByPk(req.params.id)
      await director.destroy()
      res.status(200).json(director)
    } catch (error) {
      res.status(500).json(error)
    }
  }



const addMovie = async (req, res) => {
  try {
    req.body.directorId = req.params.id
    const movie = await Movie.create(req.body)
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteDirector,
  addMovie
}
  


  

  
