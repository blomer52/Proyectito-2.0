// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "¿Cómo no sentirme bien con to' lo que me da la vida?", time: 4 },
  { text: "Hace tiempo que dejé que lo que siento sea mi guía", time: 8 },
  { text: "Ameri es el lugar al cual sueño llevarte un día", time: 12 },
  { text: "Una rosa en tu lunar une tu alma con la mía", time: 16 },
  { text: "¿Cómo no sentirse bien con to' lo que me da la vida?", time: 21 },
  { text: "Hace tiempo que dejé que lo que siento sea mi guía", time: 25 },
  { text: "Ameri es el lugar al cual sueño llevarte un día", time: 29 },
  { text: "Una rosa en tu lunar une tu alma con la mía", time: 33 },
  { text: "Me-me la paso dando clase', el trap es mi universidad", time: 40 },
  { text: "Me la paso dando palo' como árbol de Navidad", time: 44 },
  { text: "Asan, Yesan con el Zecca, es la Santa Trinidad (¡Sike!)", time: 48 },
  { text: "Cada 24 de junio es feriado nacional", time: 52 },
  { text: "Era hater y ahora es fan, trastorno de personalida'", time: 58 },
  { text: "Mejor no me den el arma, que tengo la habilida'", time: 62 },
  { text: "Nunca cambié, no hubo plan B y tuve una oportunida'", time: 66 },
  { text: "A la misión imposible le di posibilida'", time: 70 },
  { text: "Un guerrero no se dobla cuando siente dolor", time: 77 },
  { text: "Aunque esté por perder todo, nunca pierde el honor", time: 81 },
  { text: "Si me caigo, me levanto, esa es la mentalidad", time: 85 },
  { text: "Si los mío' están bien, no tengo una debilidad", time: 89 },
  { text: "¿Cómo no sentirse bien con to' lo que me da la vida?", time: 96 },
  { text: "Hace tiempo que dejé que lo que siento sea mi guía", time: 100 },
  { text: "Ameri es el lugar al cual sueño llevarte un día", time: 104 },
  { text: "Una rosa en tu lunar une tu alma con la mía", time: 108 },
  { text: "Y se hace tarde", time: 116 },
  { text: "La vida ya me dio como novecienta' chance'", time: 120 },
  { text: "Ahora tengo en mi mano lo que no tenía al alcance", time: 124 },
  { text: "Todo' saben que el Duko llegó para quedarse", time: 128 },
  { text: "Y se hace tarde", time: 134 },
  { text: "El tiempo con mi mamá es cada ve' más importante", time: 138 },
  { text: "Querer ganarle a la muerte a esta altura es de ignorante", time: 142 },
  { text: "Disfruto lo que tengo como no lo hacía antes", time: 146 },
  { text: "Un guerrero no se dobla cuando siente dolor", time: 153 },
  { text: "Aunque esté por perder todo, nunca pierde el honor", time: 157 },
  { text: "Si me caigo, me levanto, esa es la mentalidad", time: 161 },
  { text: "Si los mío' están bien, no tengo una debilidad", time: 165 },
  { text: "Larara-ra-lara-lara", time: 173 },
  { text: "Larara-ra-lara-la-ra-ra", time: 177 }, { text: "Larara-ra-lara-la-ra-ra", time: 181 },
  { text: "Larara-ra-lara-la-ra-ra", time: 185 },
  { text: "Larara-ra-lara-lara...", time: 189 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 416 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 416000);