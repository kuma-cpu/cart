const dbConfigs = require('../knexfile')
const knex = require('knex')(dbConfigs)


const productController = async (req, res) => {
    const cart = await knex('cart').select('*').orderBy('id','asc')
    res.render("view", {data: cart})
}

const productCreater = async (req, res) => {
    try {

        const inserted = await knex('cart')
            .insert(req.body)
        if(inserted === 0){
            res.status(404).json({error: "Fail to add cart"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to add cart"})
    }

    const cart = await knex('cart').select('*').orderBy('id','asc')
    res.render("view", {data: cart})
}

const availabilityController= async (req,res)=>{
    try {
        let updatedavailability = availability + 1
        let inputName = req.params.id
        const updated = await knex('cart')
                            .where({id: inputName})
                            .update({availability: updatedavailability})
        if(updated === 0){
            res.status(404).json({error: "Fail to update cart"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to update cart"})
    }

    const storage = await knex('cart').select('*').orderBy('id','asc')
    res.render("view", {data: storage})
}

const dropController = async (req,res)=>{
    try {
        let updatedavailability = availability -1
        let inputName = req.params.id
        const out = await knex('cart')
                            .where({id: inputName})
                            .update({availability: updatedavailability})
        if(out === 0){
            res.status(404).json({error: "Fail to update cart"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to update cart"})
    }

    const storage = await knex('cart').select('*').orderBy('id','asc')
    res.render("view", {data: storage})
}

const deleteController = async (req, res) => {
    console.log("Enter del")
    console.log(req.body.id)
    try {
        let inputName = req.body.id
        console.log(inputName)
        const deleted = await knex('cart')
                            .where({id: inputName})
                            .del()
        if(deleted === 0){
            res.status(404).json({error: "Fail to delete cart"})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({error: "Fail to delete cart"})
    }

    const cart = await knex('cart').select('*').orderBy('id','asc')
    res.render("view", {data: cart})
}
module.exports = {productController, deleteController, productCreater,availabilityController,dropController
}