var seachBtn = document.querySelector('.list__search');
var search = document.querySelector('.search');
var searchClose = document.querySelector('.search__icon-bar');

seachBtn.addEventListener('click',function(){
    search.classList.toggle('search__open');
})
searchClose.addEventListener('click',function(){
    search.classList.toggle('search__open');
})

$('.slider__carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay: true,
    autoplayTimeout: 8000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

var barBtnMobile = document.querySelector('.nav__mobilebar');
var menuMobile = document.querySelector('.mobile');
var closeMobile = document.querySelector('.mobile__header-icon')

barBtnMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('mobile__open');
})
closeMobile.addEventListener('click',function(){
    menuMobile.classList.toggle('mobile__open');
})
var noScroll = document.querySelector('body')
barBtnMobile.addEventListener('click', function(){
    noScroll.classList.toggle('no__croll');
})
closeMobile.addEventListener('click', function(){
    noScroll.classList.remove('no__croll');
})

var iconMobile = document.querySelectorAll('.list__item i');
iconMobile.forEach(function(item){
    item.addEventListener('click', function(){
        const currentmobileNav = document.querySelector('.list__item i.rotate');
        if(currentmobileNav && currentmobileNav !== item){
            currentmobileNav.classList.toggle('rotate');
            currentmobileNav.nextElementSibling.style.maxHeight = 0;
        }

        item.classList.toggle('rotate');
        const moblieNavMenu = item.nextElementSibling;
        console.log(moblieNavMenu)
        if(item.classList.contains('rotate')){
            moblieNavMenu.style.maxHeight = moblieNavMenu.scrollHeight + 'px';
        }
        else{
            moblieNavMenu.style.maxHeight = 0;
        }
    });
});

var navMobileSearch = document.querySelector('.nav__mobilesearch');
navMobileSearch.addEventListener('click', function(){
    search.classList.toggle('search__open');
})

var dotMobileSearch = document.querySelector('.nav__mobiledot');
dotMobileSearch.addEventListener('click', function(){
    search.classList.toggle('search__open');
})

const accodionItemHeaders = document.querySelectorAll(".accordion__item-header");
accodionItemHeaders.forEach(function(accodionItemHeader){
    accodionItemHeader.addEventListener('click', function(){
        const currentAccodionItemHeader = document.querySelector('.accordion__item-header.active');
        if(currentAccodionItemHeader && currentAccodionItemHeader !== accodionItemHeader){
            currentAccodionItemHeader.classList.toggle('active');
            currentAccodionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accodionItemHeader.classList.toggle('active');
        const accodionItemBody = accodionItemHeader.nextElementSibling;
        if(accodionItemHeader.classList.contains('active')){
            accodionItemBody.style.maxHeight = accodionItemBody.scrollHeight + 'px';
        }
        else{
            accodionItemBody.style.maxHeight = 0;
        }
    });
});


$('.partner__carousel').owlCarousel({
    loop:true,
    dots: false,
    margin:30,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:3
        },
        1000:{
            items:6
        }
    }
})