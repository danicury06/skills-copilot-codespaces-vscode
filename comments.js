// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let comments = [
    {
        id: 1,
        text: 'This is a comment'
    },
    {
        id: 2,
        text: 'This is another comment'
    }
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        text: req.body.text
    };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const commentId = parseInt(req.params.id);
    comments = comments.filter(comment => comment.id !== commentId);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});