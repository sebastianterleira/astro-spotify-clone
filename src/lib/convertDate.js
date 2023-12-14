export const convertDate = (DateOriginal) => {
  const date = new Date(DateOriginal);

  const dateFormateada = date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return dateFormateada;
};
