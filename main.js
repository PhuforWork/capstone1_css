
const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((item,index) => item.addEventListener('click',function(){
    console.log(index);
    this.classList.toggle("pane-active")
    var p = document.querySelector(`#pane${index}`)
    console.log(p);
    p.classList.toggle("pane-show")
}) )
