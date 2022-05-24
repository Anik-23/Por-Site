const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InformationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ocuupation: {
        type: String,
    },
    college: {
        type: String,
    },
    degree: {
        type: String
    },
    img:{
        type:String,
        default:"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
    },
    about:{
        type:String
    },
    description:{
        type:String
    },
    numProject:{
        type:Number,
        default:5
    },
    designation:{
        type:String,
        default:"Fresher"
    },
    currProject:{
        type:Number,
        default:0
    },
    repo:{
        type:Number,
        default:0
    },
    numShowProject:{
        type:[String]
    },
    github:{
        type:String,
        default:"#"
    },
    facebook:{
        type:String,
        default:"#"
    },
    youtube:{
        type:String,
        default:"#"
    },
    numBlogs:{
        type:[String],
    },
    location:{
        type:String,
        default:"Dont know"
    },
    phone:{
        type:Number,
        default:0000000000
    },
    email:{
        type:String,
        default:"No email"
    },
    education:{
        type:String,
        default:"Null"
    },
    languages:{
        type:String,
        default:"English"
    },
    twitter:{
        type:String,
        default:"#"
    }

})

const Info = mongoose.model('Info',InformationSchema);
module.exports = Info;