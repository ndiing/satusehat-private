const Model = require("../models/address");

class Controller {
    static async init(req, res, next) {
        try {

            res.locals.model=new Model()

            next();
        } catch (error) {
            next(error);
        }
    }

    static async insert(req,res,next){
        try {
            if(!req.body?.use){
                throw new Error(`use cannot be empty`)
            }
            const response = await res.locals.model.insert(req.body)
            res.json(response||{message:'OK'})
        } catch (error) {
            next(error)            
        }
    }
    static async select(req,res,next){
        try {
            const response = await res.locals.model.select(req.query)
            res.json(response)
        } catch (error) {
            next(error)            
        }
    }
    static async update(req,res,next){
        try {
            if(!req.body?.use){
                throw new Error(`use cannot be empty`)
            }
            const response = await res.locals.model.update(req.body)
            res.json(response||{message:'OK'})
        } catch (error) {
            next(error)            
        }
    }
    static async delete(req,res,next){
        try {
            if(!req.query?.use){
                throw new Error(`use cannot be empty`)
            }
            const response = await res.locals.model.delete(req.query)
            res.json(response||{message:'OK'})
        } catch (error) {
            next(error)            
        }
    }
}

module.exports = Controller;
