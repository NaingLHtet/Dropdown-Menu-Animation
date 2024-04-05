const menuBtn = document.querySelector(".btn");
const menuCon = document.querySelector(".menu-con");


const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
let opening = false;

//li tags
const liTags = document.getElementsByTagName("li");

menuBtn.addEventListener("click", () => {
  if(opening) {
   line1.classList.remove("moveplusdeg");
   line2.classList.remove("hiddenEl");
   line3.classList.remove("moveminusdeg");
   menuCon.classList.remove("menu-transition");
   for(let i=0;i < liTags.length;i++ ) {
     liTags[i].classList.remove("limoveDown");
   };
   opening = false;
  }else {
   line1.classList.add("moveplusdeg");
   line2.classList.add("hiddenEl");
   line3.classList.add("moveminusdeg");
   menuCon.classList.add("menu-transition");
   for(let i=0;i < liTags.length;i++ ) {
     liTags[i].classList.add("limoveDown");
   };
   opening = true;
  };
});


