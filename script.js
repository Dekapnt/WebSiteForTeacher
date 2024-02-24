
//Задаем плавную прокрутку Обязательно разобраться с фраймворком!!
$(document).ready(function(){
    $('.header__navMenu_list li a').click(function(){
        /*задали какой мы хотим отступ от верха страницы*/
        $('body,html').animate({
        /*получили положение элемента вычли отступ и прокрутили*/
        scrollTop: $($(this).attr('href')).offset().top - 70
        }, 800);
    });
    $('.header__navMenu_list_bg li a').click(function(){
        /*задали какой мы хотим отступ от верха страницы*/
        $('body,html').animate({
        /*получили положение элемента вычли отступ и прокрутили*/
        scrollTop: $($(this).attr('href')).offset().top - 40
        }, 800);
    });
});

//отключаем полосу прокрутки
const switchHiddenScroll = (value) => {
    if (value) {
        document.body.setAttribute('style', 'overflow: hidden;')
    } else {
        document.body.setAttribute('style', 'overflow: vissible;')
    }
}
//Появление попапа
const onFullScreenArticle = (numId) => {
    switchHiddenScroll(true)
    document.getElementById(`popUp_${numId}`).setAttribute('style', 'display: block')
}
const offFullScreenArticle = (numId) => {
    switchHiddenScroll(false)
    document.getElementById(`popUp_${numId}`).setAttribute('style', 'display: none')
}

//создаем и удаляем попап изобращение
const createPopUpFoto = (a) => {
    let div = document.createElement("div");
    div.className = "popupFoto";
    let div2 = document.createElement("div");
    div2.className = "popupFoto__foto";
    div.appendChild(div2)
    let img = document.createElement("img");
    img.src = a
    div2.appendChild(img)
    document.getElementById("root").appendChild(div)
    switchHiddenScroll(true)
    div.addEventListener('click', deletePopUpFoto)
}
const deletePopUpFoto = () => {
    document.getElementById("root").removeChild(document.querySelector(".popupFoto"));
    switchHiddenScroll(false)
}

//бургер меню
const switchStateBurgerMenu = () => {
    document.querySelector('.header__burgerMenu').classList.toggle('active')
    document.querySelector('.header__burgerMenu_buttonImg').classList.toggle('active')
}
const testTarget = (e) => {
    if (e.target.className == "header__burgerMenu active") {
        switchStateBurgerMenu()
        document.querySelector('.header__burgerMenu').removeEventListener('click', testTarget)
    }
    if (e.target.localName == "a") {
        switchStateBurgerMenu()
        document.querySelector('.header__burgerMenu').removeEventListener('click', testTarget)
    }
}