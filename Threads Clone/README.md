# 🧵 Threads Clone

A simple Threads-inspired social media application built using **Node.js**, **Express.js**, and **EJS**. This project was created to practice **CRUD operations**, **routing**, **EJS templating**, and **RESTful architecture**.

---

## 🚀 Features

- View all posts
- Create a new post
- View a single post
- Edit an existing post
- Delete a post
- Dynamic routing using post IDs
- RESTful CRUD operations
- Server-side rendering with EJS
- Custom CSS styling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS
- UUID
- Method Override
- HTML
- CSS

---

## 📂 Project Structure

```text
Threads-Clone/
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── public/
│   ├── index.css
│   ├── new.css
│   ├── show.css
│   └── edit.css
│
├── index.js
├── package.json
└── README.md
```

---

## 📌 Routes

| Method | Route           | Description           |
| ------ | --------------- | --------------------- |
| GET    | /posts          | Show all posts        |
| GET    | /posts/new      | Form to create a post |
| POST   | /posts          | Create a new post     |
| GET    | /posts/:id      | View a specific post  |
| GET    | /posts/:id/edit | Form to edit a post   |
| PATCH  | /posts/:id      | Update a post         |
| DELETE | /posts/:id      | Delete a post         |

---

## 📸 Post Object Structure

```js
{
  (id, username, imageUrl, content, likes, createdAt);
}
```

---

## 🧠 Concepts Practiced

- Express Routing
- Route Parameters (`req.params`)
- Form Data (`req.body`)
- CRUD Operations
- EJS Templating
- Static Files
- Redirects
- Method Override
- Array Methods (`find`, `filter`)
- RESTful Design

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node index.js
```

or

```bash
nodemon index.js
```

Open:

```text
http://localhost:3000/posts
```

---

## 🎯 Learning Outcome

This project was built as part of learning backend development with Express.js. It helped in understanding how CRUD applications work before moving to databases such as MongoDB and Mongoose.

---

## 👨‍💻 Author

**Ishan Kar**
