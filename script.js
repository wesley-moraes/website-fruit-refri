let list = document.querySelectorAll('.item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let count = list.length;
let active = 0; //Item ativo

console.log(list);

const nextFunc = next.onclick = () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count-1 ? 0 : active+1
    list[active].classList.add('active');
}

const prevFunc = prev.onclick = () =>{
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active <= 0 ? count-1 : active-1;
    list[active].classList.add('active');

}

//Scroll
window.addEventListener('wheel', function(event){
    if (event.deltaY < 0){
        prevFunc();
        console.log('scrolling up');
    }else if(event.deltaY > 0){
        console.log('scrolling down');
        nextFunc();
    }
});

//Drag
var dragged = false
window.addEventListener('mousedown', function () { dragged = false })
document.addEventListener('mousemove', function () { dragged = true })
window.addEventListener('mouseup', function(e) {

    
        if (dragged == true && e.pageX <= 0) {
            prevFunc();
        } else if (dragged == true && e.pageX >= 0) {
            nextFunc();
        }

})

let startX;

document.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', function(e) {
  let endX = e.changedTouches[0].clientX;
  handleSwipe(startX, endX);
});

function handleSwipe(startX, endX) {
    console.log('touchstart: ' + startX);
    console.log('touchstart: ' + endX);
  if (startX > endX + 50) {
    // Swipe para a esquerda
    nextFunc(); // Função que você criará para ir ao próximo item
  } else if (startX < endX - 50) {
    // Swipe para a direita
    prevFunc(); // Função que você criará para ir ao item anterior
  }
}


