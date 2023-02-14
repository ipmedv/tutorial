
// alert('WOW');
// h1Btn.addEventListener('onclick', OnclickFunc);
// function OnclickFunc(){
//     alert('hello there!');  
// }
function btnFunc(){
    let btn = document.getElementById('btn1');
    btn.classList.toggle('btn_color');
    let img = document.createElement('img');
    img.src = '/images/images.jpg';
    document.body.appendChild(img);
}