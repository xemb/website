let words = [];

fetch('words.json')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load words: ' + res.status);
    return res.json();
  })
  .then(data => {
    words = data;
  })
  .catch(err => {
    console.error(err);
    godsays.textContent =
      'Unable to load a feature, make sure you have words.json and running a HTTP server!';
  });

const tog = document.getElementById('tog');
let sans = false;
tog.onclick = () => {
  if (sans) {
    document.body.style.fontFamily = '\'Times New Roman\', serif';
  } else {
    document.body.style.fontFamily = 'Arial, sans-serif';
  }
  sans = !sans;
};

const ask = document.getElementById('ask');
const godsays = document.getElementById('godsays');
ask.onclick = () => {
  let idx = Math.floor(Math.random() * words.length);
  godsays.textContent = words[idx];
};

// Drak theme detect
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDark) {
  document.body.style.backgroundColor = '#333333';
  document.body.style.color = '#cccccc';
}