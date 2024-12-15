const fonts = ['Arial, sans-serif', 'Verdana, sans-serif', 'Tahoma, sans-serif', 'Georgia, serif', 'Palatino Linotype, serif', 'Times New Roman, serif', 'Courier New, monospace', 'Lucida Console, monospace', 'Impact, sans-serif', 'Trebuchet MS, sans-serif'];
const title = document.getElementById('changingFont');

function changeFont() {
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  title.style.fontFamily = randomFont;
}

setInterval(changeFont, 60000);