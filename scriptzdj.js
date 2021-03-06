// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}
var colorek = "#0f0";

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = colorek;
    //ctx.fillStyle = '#ff0000';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);
function komunikat()
{
  let haslo = prompt("Podaj rozwiązanie rebusa:").toUpperCase();
  haslo = haslo.replace(/\s/g, '') 
  if(haslo == "WIEWIÓRY")
  {
    document.getElementById("wiew").innerHTML = "<div><h3>WITAJ W ODDZIALE Wiewióry</h3> <br> <p>Więcej informacji wkrótce</p></div>";
    colorek="black";
  }else if(haslo == "PUCHACZE")
  {
    document.getElementById("puch").innerHTML = "<div><h3>WITAJ W ODDZIALE Puchacze</h3> <br> <p>Więcej informacji wkrótce</p></div>";
    colorek="black";
  } else if(haslo == "JASTRZĘBIE")
  {
    document.getElementById("jastrz").innerHTML = "<div><h3>WITAJ W ODDZIALE Jastrzębie</h3> <br> <p>Więcej informacji wkrótce</p></div>";
    colorek="black";
  }
}