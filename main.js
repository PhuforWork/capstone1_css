import { CountUp } from './countup.js/dist/countUp.js';
const demo1 = new CountUp('counter1', 10586, {enableScrollSpy:true});
const demo2 = new CountUp('counter2', 860, {enableScrollSpy:true});
const demo3 = new CountUp('counter3', 4394, {enableScrollSpy:true});
demo1.start()
demo2.start()
demo3.start()
const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((item,index) => item.addEventListener('click',function(){
    console.log(index);
    this.classList.toggle("pane-active")
    var p = document.querySelector(`#pane${index}`)
    console.log(p);
    p.classList.toggle("pane-show")
}) )