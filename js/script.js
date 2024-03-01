let span_gb = document.querySelector('.span_gb');
let storage__gb_left = document.querySelector('.storage__gb-left');
let storage__progress = document.querySelector('.storage__progress__bar__fill');

// Intervalo para cargar el valor de GB restantes
let gb_left = storage__gb_left.textContent;
let contador = 0;

let interval_left = setInterval(() => {
  if (contador >= gb_left) clearInterval(interval_left);
  storage__gb_left.textContent = contador > gb_left ? gb_left : contador;
  contador += 10;
}, 50);

// Intervalo para cargar el valor de GB usados
let gb_used = span_gb.textContent;
let contador_used = 0;

let interval_used = setInterval(() => {
  if ((contador_used + ' GB') === gb_used) clearInterval(interval_used);

  span_gb.textContent = contador_used;
  contador_used += 5;
}, 10);

// Intervalo para cargar la barra de progreso
let progress_cont = 0;
let interval_progress = setInterval(() => {
  let total_percent = totalPercent();
  if(progress_cont === total_percent) clearInterval(interval_progress);
  storage__progress.style.cssText = '--width-fill: ' + progress_cont + '%;';
  progress_cont += .5;
}, 10); 

function totalPercent() {
  return (100 * 815) / 1000;
}

