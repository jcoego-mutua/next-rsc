const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors"); // Importa el middleware CORS

app.use(cors());
app.use(express.json());

// Array inicial con 10 publicaciones
let posts = [
  {
    id: 1,
    title: "Post 1",
    description: "Descripción del Post 1",
    content: "Contenido del Post 1",
    category: "Categoría 1",
  },
  {
    id: 2,
    title: "Post 2",
    description: "Descripción del Post 2",
    content: "Contenido del Post 2",
    category: "Categoría 2",
  },
  {
    id: 3,
    title: "Post 3",
    description: "Descripción del Post 3",
    content: "Contenido del Post 3",
    category: "Categoría 3",
  },
  {
    id: 4,
    title: "Post 4",
    description: "Descripción del Post 4",
    content: "Contenido del Post 4",
    category: "Categoría 4",
  },
  {
    id: 5,
    title: "Post 5",
    description: "Descripción del Post 5",
    content: "Contenido del Post 5",
    category: "Categoría 5",
  },
  {
    id: 6,
    title: "Post 6",
    description: "Descripción del Post 6",
    content: "Contenido del Post 6",
    category: "Categoría 6",
  },
  {
    id: 7,
    title: "Post 7",
    description: "Descripción del Post 7",
    content: "Contenido del Post 7",
    category: "Categoría 7",
  },
  {
    id: 8,
    title: "Post 8",
    description: "Descripción del Post 8",
    content: "Contenido del Post 8",
    category: "Categoría 8",
  },
  {
    id: 9,
    title: "Post 9",
    description: "Descripción del Post 9",
    content: "Contenido del Post 9",
    category: "Categoría 9",
  },
  {
    id: 10,
    title: "Post 10",
    description: "Descripción del Post 10",
    content: "Contenido del Post 10",
    category: "Categoría 10",
  },
];

// Función para generar un ID único para nuevas publicaciones
const generateId = () => {
  return posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
};

// Crear una nueva publicación (POST /posts)
app.post("/posts", (req, res) => {
  const { title, description, content, category } = req.body;

  // Validar campos requeridos
  if (!title || !description || !content || !category) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const newPost = {
    id: generateId(),
    title,
    description,
    content,
    category,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Obtener todas las publicaciones (GET /posts)
app.get("/posts", (req, res) => {
  const sortedPosts = posts.slice().sort((a, b) => b.id - a.id); // Orden inverso por ID
  res.json(sortedPosts);
});

// Obtener una publicación por ID (GET /posts/:id)
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return res.status(404).json({ error: "Publicación no encontrada" });
  }

  res.json(post);
});

// Actualizar una publicación por ID (PUT /posts/:id)
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, content, category } = req.body;

  const postIndex = posts.findIndex((p) => p.id === parseInt(id));

  if (postIndex === -1) {
    return res.status(404).json({ error: "Publicación no encontrada" });
  }

  // Validar campos requeridos
  if (!title || !description || !content || !category) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  // Actualizar la publicación
  posts[postIndex] = {
    id: parseInt(id),
    title,
    description,
    content,
    category,
  };

  res.json(posts[postIndex]);
});

// Eliminar una publicación por ID (DELETE /posts/:id)
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((p) => p.id === parseInt(id));

  if (postIndex === -1) {
    return res.status(404).json({ error: "Publicación no encontrada" });
  }

  // Eliminar la publicación del array
  posts.splice(postIndex, 1);
  res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
