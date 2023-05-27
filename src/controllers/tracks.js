const {tracksModel} = require("../models/index")

const getItems = async (req, res) => {
  const data = await tracksModel.find({})
  res.send({data})  
}
const getItem = async (req, res) =>{}
const createItem = async (req, res) =>{
  const {body} = req
  const data = await tracksModel.create(body)

  res.json(data)
}
const upadteItem = (req, res) =>{}
const deleteItem = (req, res) =>{}



module.exports = {
  getItems, getItem, createItem, upadteItem, deleteItem
}