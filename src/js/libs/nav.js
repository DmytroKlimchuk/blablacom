var navMain = document.querySelector('.sidebar-wrapper');
var navClose = document.querySelector('.btn-sidebar-close');
var navOpen = document.querySelector('.btn-sidebar');

navMain.classList.remove('sidebar--nojs');

navOpen.addEventListener('click', function(){
    if ( navMain.classList.contains ('hidden-xs')) {
        navMain.classList.remove('hidden-xs');
        navMain.classList.add('sidebar--opened');
    } else {
        navMain.classList.add('hidden-xs');
        navMain.classList.remove('sidebar--opened');
    }
});

navClose.addEventListener('click', function(){
    if ( navMain.classList.contains ('sidebar--opened')) {
        navMain.classList.remove('sidebar--opened');
        navMain.classList.add('hidden-xs');
    }
});