////////////////////Variables//////////////////////////////////////
const $=document
let targetWord;
let targetElement;
let removeLastWord;
let enterAction;
const resultTag=_id('result')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
/////////////////////////////
function bodyKeyUpHandler(e) {
    appendTodDom(e)
    targetWord=e.code
    targetElement=$.getElementById(targetWord)
    if(targetElement!==null){
        targetElement.classList.add('hit')
        targetElement.addEventListener('animationend',removeAnimation)
    }


}
function appendTodDom(e) {
        if(e.key==='CapsLock' || e.code==='Escape'){
            return;
        }else if(e.key==='Backspace'){
            removeLastWord=resultTag.innerHTML.slice(0,-1)
            resultTag.innerHTML=removeLastWord
            return;
        }else if(e.code==='Space'){
            resultTag.innerHTML+=' '
            return;
        }else if(e.key==='Enter') {
            enterAction=$.createElement('br')
            resultTag.append(enterAction)
            return;

        }
        resultTag.append(e.key)
}
function removeAnimation(e) {
    e.target.classList.remove('hit')
}
document.body.addEventListener('keyup',bodyKeyUpHandler)