var pop = document.querySelector('.pop-menu');
var catalog=document.querySelector('.catalog');
var combo=document.querySelector('.main-navigation li:first-child');
catalog.addEventListener('mouseover',function(){
    pop.classList.remove('nomouseover');
    catalog.classList.add('catalog-hover');
});
pop.addEventListener('mouseover',function(){
    pop.classList.remove('nomouseover');
    catalog.classList.add('catalog-hover');
});
combo.addEventListener('mouseout',function(){
    pop.classList.add('nomouseover');
    catalog.classList.remove('catalog-hover');
});



