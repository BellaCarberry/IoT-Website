// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#light');
let btn2 = document.querySelector('#btn2');
// functions nut bam

btn1.addEventListener('click', ()=>{
    img1.src = 'Pics/street-light-off.png'; 
    firebase.database().ref("System 1").set({Streetlight: 0})
})
btn2.addEventListener('click', ()=>{
    img1.src = 'Pics/street-light-on.png';
    firebase.database().ref("System 1").set({Streetlight: 1})
})


// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#water');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = 'Pics/auto-watering-off.png'; 
    firebase.database().ref("System 2").set({Watering:0})
})
btn4.addEventListener('click', ()=>{
    img2.src = 'Pics/auto-watering-on.png';
    firebase.database().ref("System 2").set({Watering:1})
})



// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#speaker');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'Pics/megaphone-off.png' ;
     firebase.database().ref("System 3").set({Speaker:0})
})
btn6.addEventListener('click', ()=>{
    img3.src = 'Pics/megaphone-on.png';
    firebase.database().ref("System 3").set({Speaker: 1})

})
