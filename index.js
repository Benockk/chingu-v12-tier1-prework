
const tip = document.querySelector("#top");
const show = document.querySelector("#first");
const nav = document.querySelectorAll("li a ");



const isVisible=() => {
    const { top, bottom } = show.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.show.clientHeight);
    
    let state;

     if
      (( bottom < 0)){tip.style.opacity = 1; state = true}else{tip.style.opacity = 0; state=false};
    
      return state;
};

const toTop = ()=>{
    window.scrollTo(0,0);
}









tip.addEventListener("click", toTop)
window.addEventListener("scroll", isVisible);
// window.addEventListener("scroll", console.log(document.body.scrollTop));






