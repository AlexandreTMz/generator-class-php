window.onload = addListeners();

function addListeners(){
    document.getElementById('dxy').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('obj-class');
    div.style.position = 'absolute';
    var clientY = e.clientY < 0 ?  30  : e.clientY ;
    var clientX = e.clientX < 0 ?  30  : e.clientX ;

    div.style.top = clientY + 'px';
    div.style.left = clientX + 'px';
}