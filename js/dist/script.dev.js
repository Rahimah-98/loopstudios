"use strict";

var btn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
//# sourceMappingURL=script.dev.js.map
