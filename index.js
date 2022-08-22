const hour=document.getElementById("hour");
const minute=document.getElementById("minutes");
const sec= document.getElementById("seconds");
const ampm=document.getElementById("ampm");

function update(){
    let h = new Date().getHours(); 
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // if(h > 12){
    //     h = h-12;
    //     ampm = "PM";
    // }

    // this logic is applied when the time is to be showed in "AM" and "PM".

    h=h<10 ? "0" + h:h;
    m=m<10 ? "0" + m:m;
    s=s<10 ? "0" + s:s;


    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText= s;
    ampm.innerText = ampm;
    setTimeout(()=>{
         update()
    }, 1000)
}
update()