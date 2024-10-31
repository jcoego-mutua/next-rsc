"use server";

export const removePost = async (postId: any) => {
  try {
    const response = await fetch(`http://localhost:8080/posts/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(`Post con ID ${postId} eliminado.`);
    } else if (response.status === 404) {
      console.log("Post no encontrado.");
    } else {
      console.log("Error al eliminar el post:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
