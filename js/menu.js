var elementTop = $('.menu').offset().top;

$(window).scroll(function(){
    if( $(window).scrollTop() >= elementTop){
        $('.header').addClass('nav_fixed');
        $('.menu').addClass('logoImg');
    }else{
        $('.header').removeClass('nav_fixed');
        $('.menu').removeClass('logoImg');
    }
});

$('.btnMenu').on('click', function(){
    $('.elementos').toggleClass('logoImg');
});

$('.elementos li a:first').css({'color':'orange'});

$('.elementos li a').click(opc);
function opc(){
    $('.elementos li a').css({'color':'black'});     //Cambia e color de los items del menu
    $(this).css({'color':'orange'});
}
