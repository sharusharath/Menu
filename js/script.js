$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});
document.querySelector('#menu-toggle').addEventListener('click',function(){
    document.querySelector('#submenu1').style.display="none";

    document.querySelector('#home').addEventListener('mouseover',function(){
        document.querySelector('#submenu1').style.display="block";
        document.querySelector('#submenu1').style.marginLeft="60px";
        document.querySelector('.Sub_head').style.display="block";
});

});


document.querySelector('#menu-toggle').addEventListener('click',function(){
    document.querySelector('#submenu2').style.display="none";

    document.querySelector('#about').addEventListener('mouseover',function(){
        document.querySelector('#submenu2').style.display="block";
        document.querySelector('#submenu2').style.marginLeft="60px";
        document.querySelector('.Sub_head').style.display="block";
});

});
