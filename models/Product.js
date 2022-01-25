const mongoose= require('mongoose')
const schema= mongoose.Schema
const productSchema= new schema({
  brands:{
      type : String,required:true
  },


  reference:{
      type:Number,required:true,unique:true

  },

  price:{

   type: Number,required:true


  }

})

module.exports=mongoose.model('Product',productSchema)