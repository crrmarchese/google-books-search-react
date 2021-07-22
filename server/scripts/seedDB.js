const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

// This file empties the Book collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks"
), {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

const bookSeed = [
    {
        authors: "Suzanne Collins",
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games"
    },
    {
        authors: "José María Parramón",
        description: "In depth demonstrations teach how to interpret the basic shapes of the head and facial features. Everyone who paints or draws portraits worries most about one thing: getting an accurate likeness. But getting a likeness doesn't take genius and isn't based on a bag of tricks. It's really a matter of learning to use a logical procedure, based on careful observation of the subject, and then lots of practice. Drawing a Likeness is divided into three parts. In the first part you learn how to analyze a head--how to recognize the basic shapes and their variations, and place the features within the larger form of the head. Drawings of many different subjects serve as examples. In the second part, the actual drawing procedure is analyzed in minute detail as three different-shaped heads--oval, rectangular, and round--are drawn. Each of these three demonstrations contains a photograph of the subject and develops the portrait in great detail (45 actual steps) right down to the finished drawing. In the third part of the book, you learn how to use different combinations of drawing materials to create a wide range of effects: charcoal, Conté, and carbon pencils on both gray and white charcoal paper, graphite pencils on illustration board, soft and hard charcoal sticks and pencils on smooth board, charcoal and carbon pencil worked over acrylic-gessoed chipboard. There are six demonstrations in this section showing how to draw men and women of different ages. Each demonstration has ten steps, one per page, and includes a photograph of the subject. Drawing a Likeness is a basic, practical book for anyone who has ever tried to draw or paint a portrait--students, amateurs, professionals, and teachers.",
        image: "http://books.google.com/books/content?id=rD1QAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=rD1QAAAAMAAJ&dq=color+theory&hl=&source=gbs_api",
        title: "Color Theory"
    },
    {
      authors: "Norah T. Hunter",
      description: "Newly expanded and updated, the 3rd Edition of THE ART OF FLORAL DESIGN introduces the full range of floral design techniques, from basic to advanced, with vivid photographs, colorful illustrations, and easy-to-understand descriptions. The book balances theory with practice, covering the history of design, artistic elements, floral anatomy, and nomenclature, as well as techniques, tools, and specialties. Much more than a design book, THE ART OF FLORAL DESIGN, 3rd Edition prepares readers for 21st century careers with industry-specific discussions about distribution channels, marketing, advertising, finance, business practices, and labor issues. Instructors save time with the available PowerPoint slides, interactive classroom activities, and a full-color image library. Important Notice: Media content referenced within the product description or the product text may not be available in the ebook version.",
      image: "http://books.google.com/books/content?id=nSQXAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "http://books.google.com/books?id=nSQXAAAAQBAJ&printsec=frontcover&dq=floral+design&hl=&cd=6&source=gbs_api",
      title: "The Art of Floral Design"
  },

];

db.Book.deleteMany()
  .then(() => {
    db.Book.insertMany(bookSeed)
    .then(data => {
      console.log("records inserted!");
      process.exit(0);
    })
    // Error for insertion
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  })
  // Error with deleting books
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
