$(document).ready(function(){
    // **********************************************
    //                SLIDER PUPLICIDAD
    // ***********************************************
    var elemSlider = $('.elemSlider li').length;        //Cantidad de li (elementos para el slider)
    var posImg = 1;

    for(i = 1; i<= elemSlider; i++){                    //Ciclo para crear circulos de paginacion
        $('.paginacion').append('<li><span>&#8226</span></li>')
    }

    $('.elemSlider li').hide();                         //Ocultar todos los elementos (imagenes) del slider
    $('.elemSlider li:first').show();                   //Mostrar solo 1
    $('.paginacion li:first').css({'color':'orange'});

    $('.paginacion li').click(paginacion);
    $('.der span').click(derecha);
    $('.izq span').click(izquierda);


    setInterval(function(){derecha();},5000);       //Cada 4s ejecuta la funcion derecha

    function paginacion(){
        var posicion = $(this).index() + 1;         //Obtener el valor del circulo seleccionado
        posImg = posicion;                          //Si selecciona un curculo se almacena el lugar del slider activo

        $('.elemSlider li').hide();
        $('.elemSlider li:nth-child('+ posicion +')').fadeIn(1000);     //Muestra la slider que toque

        $('.paginacion li').css({'color':'black'});     //Cambia ek color de los circulos
        $(this).css({'color':'orange'});
    }

    function derecha(){
        if(posImg == elemSlider){
            posImg = 1;
        }else{
            posImg++;
        }

        $('.elemSlider li').hide();
        $('.elemSlider li:nth-child('+ posImg +')').fadeIn(1000) ;

        $('.paginacion li').css({'color':'black'});     //Cambia ek color de los circulos
        $('.paginacion li:nth-child('+ posImg +')').css({'color':'orange'});
    }

    function izquierda(){
        if(posImg == 1){
            posImg = elemSlider;
        }else{
            posImg--;
        }

        $('.elemSlider li').hide();
        $('.elemSlider li:nth-child('+ posImg +')').fadeIn(1000) ;

        $('.paginacion li').css({'color':'black'});     //Cambia ek color de los circulos
        $('.paginacion li:nth-child('+ posImg +')').css({'color':'orange'});
    }


    // **********************************************
    //                SLIDER OPINONES
    // ***********************************************
    var elemSliderOp = $('.elemSliderOp li').length;        //Cantidad de li (elementos para el slider)
    var posImgOp = 1;

    for(i = 1; i<= elemSliderOp; i++){                    //Ciclo para crear circulos de paginacion
        $('.paginacionOp').append('<li><span>&#8226</span></li>')
    }

    $('.elemSliderOp li').hide();                         //Ocultar todos los elementos (imagenes) del slider
    $('.elemSliderOp li:first').show();                   //Mostrar solo 1
    $('.paginacionOp li:first').css({'color':'orange'});

    $('.paginacionOp li').click(paginacionOp);
    // $('.derOp span').click(derechaOp);
    // $('.izqOp span').click(izquierdaOp);


    setInterval(function(){derechaOp();},6000);       //Cada 5s ejecuta la funcion derecha

    function paginacionOp(){
        var posicion = $(this).index() + 1;         //Obtener el valor del circulo seleccionado
        posImgOp = posicion;                          //Si selecciona un curculo se almacena el lugar del slider activo

        $('.elemSliderOp li').hide();
        $('.elemSliderOp li:nth-child('+ posicion +')').fadeIn(1000);     //Muestra la slider que toque

        $('.paginacionOp li').css({'color':'black'});     //Cambia el color de los circulos
        $(this).css({'color':'orange'});
    }

    function derechaOp(){
        if(posImgOp == elemSliderOp){
            posImgOp = 1;
        }else{
            posImgOp++;
        }

        $('.elemSliderOp li').hide();
        $('.elemSliderOp li:nth-child('+ posImgOp +')').fadeIn(1000) ;

        $('.paginacionOp li').css({'color':'black'});     //Cambia el color de los circulos
        $('.paginacionOp li:nth-child('+ posImgOp +')').css({'color':'orange'});
    }

    // function izquierdaOp(){
    //     if(posImg == 1){
    //         posImg = elemSliderOp;
    //     }else{
    //         posImg--;
    //     }

    //     $('.elemSliderOp li').hide();
    //     $('.elemSliderOp li:nth-child('+ posImg +')').fadeIn(1000) ;

    //     $('.paginacionOp li').css({'color':'black'});     //Cambia ek color de los circulos
    //     $('.paginacionOp li:nth-child('+ posImg +')').css({'color':'orange'});
    // }
});