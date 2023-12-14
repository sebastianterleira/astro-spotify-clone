export const msToMin = (milisegundos) => {
  const totalSegundos = Math.floor(milisegundos / 1000);

  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;

  if (segundos.toString().length === 2) {
    return minutos + ":" + segundos;
  } else {
    return minutos + ":" + segundos + "0";
  }
};
