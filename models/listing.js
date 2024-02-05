const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,    
    },
    description: String,
    image: {
        url:{
        type: String,
        default: 
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpetapixel.com%2Fwhat-is-unsplash%2F&psig=AOvVaw0gcfBvytfecUDI2u_lNYJE&ust=1706734676618000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDo9aKAhoQDFQAAAAAdAAAAABAE",
        set: (v) => 
        v === "" 
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpetapixel.com%2Fwhat-is-unsplash%2F&psig=AOvVaw0gcfBvytfecUDI2u_lNYJE&ust=1706734676618000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDo9aKAhoQDFQAAAAAdAAAAABAE"
         : v,
         required:true,
        },
         
        filename:{
           type:String,
           required:true,
       },
        
    },
    price: Number,
    location: String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;