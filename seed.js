const mongoose = require('mongoose');
const Info = require('./models/information');

mongoose.connect('mongodb://localhost:27017/prot-folio', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


// const p = new Info({
//     name: "Nikhil Upadhyay",
//     ocuupation: "Web Producer",
//     college: "GLA University",
//     degree: "Btech",
//     img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=",
//     about: "Hii my nameis Nikhil Upadhyay I am good in web development",
//     description: "Hey Buddy Welcome to my Porfolio website This is an awesome page to create portfolio link"
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })


const p = new Info({
    name: "Amit Gupta",
    ocuupation: "Automate-Tester",
    college: "ABES IT",
    degree: "Btech",
    img: "data:image/jpeg;base64,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",
    about: "“I graduated with a Btech degree in 2010, and was offered a Software Analyst position from a multinational company I had interned with. I loved working with customers and managing and growing my accounts, but the industry we were in just wasn’t very appealing to me. After that, I stayed a full year and learned a ton about how to build and manage accounts successfully and  I ended up becoming a top performer in my group before leaving. I left at the 1-year-mark to pursue a very similar position within an industry I’m much more excited about- healthcare. I’ve been at this healthcare startup space for 2 years with this company and I feel ready to take my career to the next level so that’s why I’m currently looking for a new opportunity.”",
    description:"“…and that’s why I wanted to interview with your firm. This position seems like a great opportunity to advance those skills I just talked about, and continue building my career and challenging myself”.",
    numProject:12,
    designation:"Quality Analyst",
    currProject:10,
    repo:66,
    numShowProject:["Compile run","Daily Hunt","Pikashow"],
    github:"https://github.com/Anik-23",
    numBlogs:["How to make website","Love is unbeatable","true Story","MEN","Unstopable"],

})
p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })