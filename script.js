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
var jastrzebie = ["AŁ", "A", "O", "M", "AG"];
var puchacze = ["PK", "JS", "FK", "KD", "LB"];
var wiewiorki = ["JW", "NS", "MC", "FG", "AK"];
function authorize()
{
  let inicjaly = prompt("wprowadź swoje inicjały").toUpperCase();
  if(jastrzebie.includes(inicjaly) || puchacze.includes(inicjaly) || wiewiorki.includes(inicjaly))
  {
    document.getElementById('btn').style.color = "blue";
    colorek = '#0000FF'
    if(jastrzebie.includes(inicjaly))
    {
      alert("wytycznejastrz");
    } else if(puchacze.includes(inicjaly))
    {
      alert("wytycznepuch");
    } else if(wiewiorki.includes(inicjaly))
    {
      alert("wytycznewiew");
    }
  } else 
  {
    alert("nieprawidłowe inicjały")
    document.getElementById('btn').style.color = "red";
    colorek = '#ff0000'
  }
}
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