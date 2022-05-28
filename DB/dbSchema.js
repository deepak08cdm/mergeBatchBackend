const mongo = require('mongoose')
const dbSchema = new mongo.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true
        }
    }
)

module.exports = mongo.model('details',dbSchema)