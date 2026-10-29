const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

let dreams = [
    {
        "title": "World Peace",
        "description": "A world where all nations live in harmony and conflicts are resolved peacefully.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/peace.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "1"
    },
    {
        "title": "End World Hunger",
        "description": "A world where no one goes hungry and has access to sufficient food.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/food.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "2"
    },
    {
        "title": "Free Education",
        "description": "A world where education is funded by government spending and accessible to all children.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/education.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "3"
    },
    {
        "title": "Free Healthcare",
        "description": "A world where healthcare is freely available to all individuals.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/health.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "4"
    },
    {
        "title": "Become a Star",
        "description": "To reach stardom and become a celebrated celebrity.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/star.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "5"
    },
    {
        "title": "To win the Lottery",
        "description": "Winning it big at the lottery so I can achieve financial freedom.",
        "type": "Short-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/lottery.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "6"
    },
    {
        "title": "To become an Astronaut",
        "description": "Learn all the knowledge and go through the training required to become an astronaut. Followed by being selected for the pace Program.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/astronaut.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "7"
    },
    {
        "title": "To Travel the World",
        "description": "To explore different countries, cultures, and experiences around the world.",
        "type": "Long-term",
        "img_name": "https://breadwards88.github.io/csce242/projects/part7/images/travel.jpg",
        "yes_count": "0",
        "no_count": "0",
        "_id": "8"
    },
    {
        "title": "To climb Mount Everest",
        "description": "To climb the highest peak in the world",
        "type": "Destination",
        "img_name": "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637700.156236257!2d86.55243663706656!3d27.999129368736213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sus!4v1791766992413!5m2!1sen!2sus",
        "yes_count": "0",
        "no_count": "0",
        "_id": "9"
    }
]

app.get("/api/dreams", (req,res)=>{
    res.send(dreams);
});

//listen to incoming requests
app.listen (3001, ()=>{
    console.log("Server is up and running");
});