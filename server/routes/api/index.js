const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

// Search route
router.post("/search", (req, res) => {
    const searchRequest = req.body.searchRequest;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchRequest}&key=${process.env.BOOK_API_KEY}`)
    .then(response =>{
        const formattedBooks=response.data.items.map(item => {
            return {
                title: item.volumeInfo.title,
                description: item.volumeInfo.description,
                authors: item.volumeInfo.authors.join(", "),
                image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "",
                link: item.volumeInfo.infoLink
            }
        })
        res.status(201).send(formattedBooks);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

module.exports = router;