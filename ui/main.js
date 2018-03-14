console.log('Loaded!');
alert('hii');
var element =document.getElementById('main-txt');
element.innerHTML='new value';
var img=document.getElementById('pic');
img.onclick=function(){
    img.style.marginLeft='100px';
};