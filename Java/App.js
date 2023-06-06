const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#searchicon1');
const searchInput1 = document.querySelector('#searchInput1');

searchicon1.addEventListener('click' ,function(){
    searchInput1.style.display='flex';
    srchicon1.style.display='none';})


const searchicon2 = document.querySelector('#searchIcon2');
const srchicon2 = document.querySelector('#searchIcon2');
const searchInput2 = document.querySelector('#searchInput2');
    
searchicon2.addEventListener('click' ,function(){
    searchInput2.style.display='flex';
    srchicon2.style.display='none';})
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');
bar.addEventListener('click' , function(){
    setTimeout(() => {
        cross.style.display='block';    
    }, 200);
    headerbar.style.right='0%'})
cross.addEventListener('click' , function(){
    cross.style.display='none';
    headerbar.style.right='-100%';
})