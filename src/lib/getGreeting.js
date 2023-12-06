export const getGreeting = () => {
  const currentTime = new Date().getHours();

  let greeting;

  if (currentTime >= 5 && currentTime < 12) {
    greeting = "¡Buenos días!";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "¡Buenas tardes!";
  } else {
    greeting = "¡Buenas noches!";
  }

  return greeting;
};
