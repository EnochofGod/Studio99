  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  nav.addEventListener("click", reload = ()=> {
   nav.style.display = "block";
});
  burger.addEventListener("click", reload = ()=> {
     location.reload();
  });