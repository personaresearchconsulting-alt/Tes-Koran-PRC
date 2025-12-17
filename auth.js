function login(){
  localStorage.setItem("auth", "ok");
  location.href = "Tes/tes-koran.html";
}

function protect(){
  if(!localStorage.getItem("auth")){
    location.href = "../login.html";
  }

  const brand = document.createElement("div");
  brand.innerHTML = "© Persona Research & Consulting";
  brand.style.cssText =
    "position:fixed;bottom:8px;right:12px;font-size:11px;color:#666;z-index:9999";
  document.body.appendChild(brand);
}