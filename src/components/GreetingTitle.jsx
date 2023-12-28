export default function GreetingTitle() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "¡Buenos días!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "¡Buenas tardes!";
  } else {
    greeting = "¡Buenas noches!";
  }
  return (
    <h1
      style={{
        fontSize: "1.95em",
        fontWeight: "700",
        letterSpacing: "-1px",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {greeting}
    </h1>
  );
}
