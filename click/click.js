let hr=document.getElementById("hr");
let mn=document.getElementById("mn");
let sc=document.getElementById("sc");
setInterval(()=>{
    let date=new Date();
    let hh=date.getHours()*30;
    let mm=date.getMinutes()*6;
    let ss=date.getSeconds()*6;
    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${mm}deg)`;
    sc.style.transform=`rotateZ(${ss}deg)`;
})