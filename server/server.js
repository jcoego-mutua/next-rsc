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
    title: "Cómo Optimizar tu Sitio Web para el SEO en 2024",
    description:
      "Aprende técnicas avanzadas de SEO para mejorar la visibilidad de tu sitio web.",
    content: `
      <h2>Introducción al SEO en 2024</h2>
      <p>El <strong>SEO</strong> sigue siendo esencial para cualquier sitio web que desee destacar. En 2024, los algoritmos son cada vez más inteligentes y la competencia es feroz.</p>
      <h3>Técnicas Clave para Mejorar tu SEO</h3>
      <p>Aquí te mostramos algunas técnicas avanzadas que puedes implementar:</p>
      <ul>
        <li><strong>Optimización en la Página:</strong> Cuida los encabezados, palabras clave y la densidad de texto.</li>
        <li><strong>Velocidad de Carga:</strong> Un sitio lento reduce la experiencia del usuario y afecta tu ranking.</li>
        <li><strong>Contenido de Calidad:</strong> Crea contenido que realmente aporte valor al usuario.</li>
      </ul>
      <p>Recuerda que el SEO es una inversión a largo plazo. Puedes consultar <a href="https://www.example.com/seo">esta guía completa</a> para profundizar en el tema.</p>
      <blockquote>“El SEO efectivo no es magia; es estrategia y esfuerzo continuo”</blockquote>
    `,
    category: "SEO",
  },
  {
    id: 2,
    title: "Beneficios de Usar Componentes Reutilizables en React",
    description:
      "Exploramos cómo los componentes reutilizables en React pueden mejorar tu flujo de trabajo.",
    content: `
      <h2>Componentización en React</h2>
      <p>React facilita el desarrollo de interfaces mediante el uso de <strong>componentes reutilizables</strong>, lo que reduce el código redundante.</p>
      <h3>¿Por qué usar componentes reutilizables?</h3>
      <p>Las ventajas de usar componentes reutilizables incluyen:</p>
      <ul>
        <li><strong>Mantenibilidad:</strong> Un cambio en un componente se refleja dondequiera que se use.</li>
        <li><strong>Productividad:</strong> Menos tiempo para construir interfaces consistentes.</li>
      </ul>
      <p>Esta práctica es esencial para proyectos grandes donde la consistencia es clave. Revisa <a href="https://reactjs.org/docs/">la documentación oficial de React</a> para más detalles.</p>
    `,
    category: "Desarrollo Web",
  },
  {
    id: 3,
    title: "Introducción a la Inteligencia Artificial en el Desarrollo Web",
    description:
      "Descubre cómo la inteligencia artificial está transformando el desarrollo de sitios web.",
    content: `
      <h2>El Impacto de la IA en el Desarrollo Web</h2>
      <p>La <strong>inteligencia artificial (IA)</strong> está revolucionando el desarrollo web, permitiendo experiencias personalizadas y análisis en tiempo real.</p>
      <h3>Aplicaciones Comunes de la IA en Web</h3>
      <ul>
        <li><strong>Chatbots:</strong> Automatizan la atención al cliente.</li>
        <li><strong>Personalización:</strong> Contenido adaptado a los intereses del usuario.</li>
        <li><strong>Análisis de Datos:</strong> Mejora la toma de decisiones en tiempo real.</li>
      </ul>
      <blockquote>“La IA no es el futuro, es el presente de las experiencias digitales.”</blockquote>
      <p>Explora más sobre IA en el <a href="https://www.example.com/ai-in-web">desarrollo web aquí</a>.</p>
    `,
    category: "Inteligencia Artificial",
  },
  {
    id: 4,
    title: "Mejores Prácticas para la Seguridad en Aplicaciones Web",
    description:
      "Protege tu aplicación contra vulnerabilidades comunes en la web.",
    content: `
      <h2>Por Qué la Seguridad Web es Fundamental</h2>
      <p>En un entorno digital, la <strong>seguridad en aplicaciones web</strong> es clave para proteger los datos de los usuarios y mantener la confianza.</p>
      <h3>Consejos de Seguridad Básicos</h3>
      <ul>
        <li><strong>HTTPS:</strong> Utiliza conexiones seguras en todo el sitio.</li>
        <li><strong>Control de Acceso:</strong> Implementa autenticación y autorización para proteger datos sensibles.</li>
        <li><strong>Validación de Entrada:</strong> Evita ataques de <em>XSS</em> y <em>SQL Injection</em>.</li>
      </ul>
      <p>La <a href="https://owasp.org/">Fundación OWASP</a> tiene excelentes recursos para profundizar en seguridad web.</p>
    `,
    category: "Seguridad",
  },
  {
    id: 5,
    title: "Las 5 Librerías de JavaScript que Necesitas en 2024",
    description:
      "Un repaso de las librerías más útiles y populares en el desarrollo con JavaScript.",
    content: `
      <h2>Librerías de JavaScript Imprescindibles</h2>
      <p>En 2024, estas librerías de JavaScript están marcando tendencias:</p>
      <ul>
        <li><strong>React:</strong> Biblioteca de frontend de referencia para interfaces interactivas.</li>
        <li><strong>Next.js:</strong> Ideal para renderizado en servidor y optimización de sitios.</li>
        <li><strong>Three.js:</strong> Crea gráficos 3D y experiencias inmersivas en la web.</li>
        <li><strong>Lodash:</strong> Simplifica el manejo de datos complejos.</li>
        <li><strong>Axios:</strong> Perfecta para realizar peticiones HTTP de forma sencilla.</li>
      </ul>
      <p>Estas herramientas aceleran el desarrollo y permiten experiencias más ricas en la web.</p>
    `,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Cómo Comenzar en el Mundo del Desarrollo Full-Stack",
    description:
      "Guía paso a paso para aquellos que desean convertirse en desarrolladores full-stack.",
    content: `
      <h2>¿Qué es el Desarrollo Full-Stack?</h2>
      <p>Un <strong>desarrollador full-stack</strong> domina tanto el frontend como el backend, lo que permite construir aplicaciones completas de forma autónoma.</p>
      <h3>Habilidades Clave para Desarrollo Full-Stack</h3>
      <ul>
        <li><strong>Frontend:</strong> HTML, CSS, y JavaScript.</li>
        <li><strong>Backend:</strong> Node.js y bases de datos como MongoDB.</li>
        <li><strong>DevOps:</strong> Gestión de servidores y despliegues.</li>
      </ul>
      <p>Explora más en <a href="https://www.example.com/full-stack-guide">esta guía completa de desarrollo full-stack</a>.</p>
    `,
    category: "Desarrollo Full-Stack",
  },
  {
    id: 7,
    title: "Principales Tendencias en Diseño UX para 2024",
    description:
      "Explora las tendencias de diseño UX que marcarán la diferencia el próximo año.",
    content: `
      <h2>Diseño UX: Lo que Viene en 2024</h2>
      <p>El diseño UX está en constante cambio. En 2024, algunas tendencias destacan:</p>
      <ul>
        <li><strong>Minimalismo:</strong> Interfaces limpias y fáciles de navegar.</li>
        <li><strong>Interacciones Micro:</strong> Animaciones que mejoran la experiencia.</li>
        <li><strong>Personalización:</strong> Contenido adaptado a cada usuario.</li>
      </ul>
      <p>Descubre más sobre <a href="https://www.example.com/ux-trends">UX en 2024 aquí</a>.</p>
    `,
    category: "Diseño UX",
  },
  {
    id: 8,
    title: "Automatización de Procesos en Aplicaciones Web con Node.js",
    description:
      "Automatizar procesos en aplicaciones puede ahorrar tiempo y recursos.",
    content: `
      <h2>Automatización con Node.js</h2>
      <p>La <strong>automatización</strong> en Node.js permite optimizar tareas repetitivas.</p>
      <h3>Aplicaciones Comunes</h3>
      <ul>
        <li><strong>Programación de Tareas:</strong> Usando CRON jobs en servidores.</li>
        <li><strong>Automatización de Pruebas:</strong> Scripts para pruebas automatizadas con Mocha.</li>
      </ul>
      <p>Más información en nuestra <a href="https://www.example.com/node-automation">guía de automatización con Node.js</a>.</p>
    `,
    category: "Automatización",
  },
  {
    id: 9,
    title: "El Poder de GraphQL en el Desarrollo de APIs",
    description:
      "GraphQL es una alternativa moderna a REST para el desarrollo de APIs.",
    content: `
      <h2>¿Por qué GraphQL?</h2>
      <p><strong>GraphQL</strong> permite realizar consultas flexibles y evitar la sobrecarga de datos.</p>
      <h3>Ventajas de GraphQL</h3>
      <ul>
        <li><strong>Consultas Precisas:</strong> Solicita solo los datos necesarios.</li>
        <li><strong>Flexibilidad:</strong> Una sola API para múltiples clientes.</li>
      </ul>
      <p>Consulta la <a href="https://graphql.org/">documentación oficial de GraphQL</a> para más detalles.</p>
    `,
    category: "APIs",
  },
  {
    id: 10,
    title: "Cómo Integrar Machine Learning en tu Aplicación Web",
    description:
      "Aprende los pasos básicos para integrar Machine Learning en aplicaciones web.",
    content: `
      <h2>Machine Learning en la Web</h2>
      <p>Integrar <strong>Machine Learning</strong> permite personalizar y analizar datos de manera avanzada.</p>
      <h3>Cómo Comenzar</h3>
      <ul>
        <li><strong>Bibliotecas:</strong> Usa TensorFlow.js o ml5.js para modelos en JavaScript.</li>
        <li><strong>Integración de Modelos:</strong> Predicciones en tiempo real en el frontend.</li>
      </ul>
      <p>Más sobre <a href="https://www.example.com/machine-learning-web">Machine Learning en aplicaciones web aquí</a>.</p>
    `,
    category: "Machine Learning",
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
