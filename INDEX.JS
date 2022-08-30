const textareaEl=document.getElementById("textarea");
const totalCounterEl=document.getElementById("total-counter");
const RemainingCounterEl=document.getElementById("Remaining-counter");

textareaEl.addEventListener("keyup",()=>{
updateCounter();
})
function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    RemainingCounterEl.innerText = 
    textareaEl.getAttribute("maxlength") -
   textareaEl.value.length;
}
