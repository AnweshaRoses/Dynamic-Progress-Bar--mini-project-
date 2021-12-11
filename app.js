const progress =document.querySelector(".progress");
const loading=document.querySelector(".loading-text");
let i=0;
const fakeUploadPerc=[0,10,25,40,60,70,90,100];
const interval=setInterval(()=>{
    progress.style.width= fakeUploadPerc[i]+ "%";
    loading.innerHTML=fakeUploadPerc[i]+"%";
    i++;
    if(i==fakeUploadPerc.length){
        clearInterval(interval)
        loading.innerHTML="completed";
    }
},1000);