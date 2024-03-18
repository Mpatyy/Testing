let mover = false;
let posX=0;
let posY=0;

async function bucleMover(offsetX, offsetY) {
    mover=true
    let sizeX = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sizeX'));
    let sizeY = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sizeY'));

    while (mover==true) {
        posX-= 3;
        posY-= 1;
        if (posX<= -sizeX) {
            console.log("reiniciando posicion X")
            posX = 0;
        }
        if (posY<= -sizeY) {
            console.log("reiniciando posicion Y")
            posY = 0;
        }


        document.documentElement.style.setProperty('--posX', (posX+offsetX)+'px');
        document.documentElement.style.setProperty('--posY', (posY+offsetY)+'px');
        await sleep(50);
    }
}
function parar() {
    mover=false
}


var sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}