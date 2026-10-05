const express = require("express");
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "ishan",
        imageUrl: "https://picsum.photos/seed/ishan/600/400",
        content: "Started building my own Threads Clone today 🚀",
        likes: 125,
        createdAt: "05/10/2026"
    },

    {
        id: uuidv4(),
        username: "apnacollege",
        imageUrl: "https://picsum.photos/seed/apna/600/400",
        content: "New Sigma lecture uploaded today!",
        likes: 450,
        createdAt: "04/10/2026"
    },

    {
        id: uuidv4(),
        username: "openai",
        imageUrl: "https://picsum.photos/seed/openai/600/400",
        content: "Learning by building projects is the fastest way to improve.",
        likes: 980,
        createdAt: "03/10/2026"
    }
];



app.get("/posts", (req, res) => {
    // console.log("app is running");
    // res.send("Welcome to threads !");
    res.render("index.ejs", { posts });
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, imageUrl, content } = req.body;
    let id = uuidv4();
    let likes = 0;
    // console.log(id);
    // console.log(likes);
    let createdAt = new Date();
    let day = createdAt.getDate();
    let month = createdAt.getMonth() + 1;
    let year = createdAt.getFullYear();
    createdAt = `${day}/${month}/${year}`;
    // console.log(createdAt);
    posts.push({ id, username, imageUrl, content, likes, createdAt });
    res.redirect("/posts");
})


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { content, imageUrl } = req.body;
    let post = posts.find((p) => p.id === id);
    post.content = content;
    post.imageUrl = imageUrl;
    res.redirect("/posts")
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`App is listing to the port ${port}`)
});