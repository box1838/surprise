const d = document;
const title = document.getElementById("title");

const arr = [
  {
    title: "AUN NO ES MOMENTO🙃",
    color1: "#fde0e2",
    color2: "#363639",
    color3: "#363639",
  },
  {
    title: "SE PACIENTE🤗",
    color1: "#FFB4B4",
    color2: "#fff",
    color3: "#FFB4B4",
  },
  {
    title: "CUENTA HASTA EL 7🤭",
    color1: "#d7bbf5",
    color2: "#fff",
    color3: "#d7bbf5",
  },
  {
    title: "RESPIRA, FALTA POQUITO🥺",
    color1: "#c9eeff",
    color2: "#363639",
    color3: "#363639",
  },
  {
    title: "BRILLAS MIENTRAS ESPERAS✨",
    color1: "#C71585",
    color2: "#fff",
    color3: "#C71585",
  },
  {
    title: "SONRÍE, EL TIEMPO VUELA😊",
    color1: "#fbfacd",
    color2: "#363639",
    color3: "#363639",
  },
  {
    title: "MIRA UN CHOCOLATE🍫",
    color1: "#FFE6F7",
    color2: "#363639",
    color3: "#363639",
  },
  {
    title: "ESPERAR ES APRENDER🙂",
    color1: "#cdf0ea",
    color2: "#363639",
    color3: "#363639",
  },
  {
    title: "Y QUE PASARÍA SI...🤔",
    color1: "#FF7C7C",
    color2: "#fff",
    color3: "#FF7C7C",
  },
  {
    title: "SERA HOY???😶",
    color1: "#00d7ff",
    color2: "#fff",
    color3: "#00d7ff",
  },
];

function numeroRandomUniforme() {
  return Math.floor(Math.random() * 10);
}

d.addEventListener("DOMContentLoaded", function () {
  const i = numeroRandomUniforme();
  const context = arr[i];

  title.textContent = context.title;

  document.documentElement.style.setProperty("--bg-color", context.color1);
  document.documentElement.style.setProperty("--tx-color", context.color2);
  document.documentElement.style.setProperty("--tx-number", context.color3);
});
