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

let timeVer = true;


window.addEventListener('touchmove', function(event){
    var windowWidth = window.innerWidth;
    console.log('tamanho da tela: ' + windowWidth);

    var touchLocation = event.targetTouches[0];
    console.log(touchLocation.pageX)
    if(touchLocation.pageX < windowWidth/2 && timeVer === true){
        prevFunc();
        timeVer = false;
        console.log('dentro: ' + timeVer)
        setInterval(() => timeVer = true , 100);
    }
    if(touchLocation.pageX > windowWidth/2 && timeVer === true){
        console.log('tela dividida: ' + windowWidth/2)
        timeVer = false;
        console.log('dentro: ' + timeVer)
        setInterval(() => timeVer = true , 1000);
        nextFunc();
        
    }
});




