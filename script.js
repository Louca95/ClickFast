
let count = 0;
let isCounting = false;

document
  .getElementById("button-clicker")
  .addEventListener("click", () => {
    if (!isCounting) {
      isCounting = true;
      setTimeout(() => {
        document.getElementById("score").innerHTML = `Votre score est : ${count}`;
        count = 0;
        document.getElementById("counter").innerHTML = count;
        isCounting = false;
      }, 15000); // 15000 millisecondes = 15 secondes
    }
    count++;
    document.getElementById("counter").innerHTML = count;
  });

const app = require("express")();

app.get("/", (req, res) => res.json({ message: "Bonjouuuur :)" }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);

