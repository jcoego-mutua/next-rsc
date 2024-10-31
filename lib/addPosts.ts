"user server";

export const createPost = async (post: any) => {
  try {
    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Post añadido:", result);
    } else {
      console.log("Error al añadir el post:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
