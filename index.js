function rain(){
    let heart = document.querySelector('.heart');
    let e = document.createElement('div');
    e.classList('drop');
    heart.appendChild(e);
    setTimeout(function(){
        heart.removeChild(e)
    },5000)
}