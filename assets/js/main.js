async function loadComponent(id, file) {
  const res = await fetch(`./components/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function init() {
  await loadComponent("nav", "nav.html");
  await loadComponent("hero", "hero.html");
  await loadComponent("about", "about.html");
  await loadComponent("apartments", "apartments.html");
  await loadComponent("location", "location.html");
  await loadComponent("info", "info.html");

  initUI();
}

function initUI(){
  window.toggleMenu = function(){
    const menu = document.getElementById("mobile-menu");
    if(menu){
      menu.classList.toggle("open");
    }
  }
}

init();
