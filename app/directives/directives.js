(function () {
    'use strict';
    angular.module('app.e-siat') 
        .directive("animarServicios", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            //En mouseover
            $(elem).mouseover(function() {
                var icono = $('.servicios-items i');
                var h4 = $('.servicios-items h4');
                var parrafo = $('.servicios-items div');

                $(this).css({'background-color': '#40c4ff'});
                $(this).find(h4).css({
                    'color': 'white',
                    'transform': 'translateY(-67px)'
                });
                $(this).find(icono).addClass('hover-service');
                $(this).find(parrafo).css({'top': '50%'});
                console.log('ENTER');
            });
            $(elem).mouseleave(function(){
                var icono = $('.servicios-items i');
                var h4 = $('.servicios-items h4');
                var parrafo = $('.servicios-items div');

                $(this).css({'background-color': 'rgb(242,242,242)'});
                $(this).find(h4).css({
                    'color': 'black',
                    'transform': 'translateY(0px)'
                });
                $(this).find(icono).removeClass('hover-service');
                $(this).find(parrafo).css({'top': '100%'});
                console.log('leave');
            });
            $('#boton-servicio').click(function(){
                var icono = $('.servicios-items i');
                var h4 = $('.servicios-items h4');
                var parrafo = $('.servicios-items div');

                $(this).css({'background-color': 'rgb(242,242,242)'});
                $(this).find(h4).css({
                    'color': 'black',
                    'transform': 'translateY(0px)'
                });
                $(this).find(icono).removeClass('hover-service');
                $(this).find(parrafo).css({'top': '100%'});
                console.log('CLICK');
            });

        }

    }
})
    //Hacer el Navbar fixed apartir de cierta altura de la pantalla
    .directive("scroll", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            //En mouseover
           $(window).scroll(function (){
                var wScroll = $(this).scrollTop();
                console.log(wScroll);
                if(wScroll > 740){
                    $('#toolbar').addClass('fixed');
                    $('#toolbar').addClass('md-whiteframe-3dp');
                } else{
                    $('#toolbar').removeClass('fixed');
                    $('#toolbar').removeClass('md-whiteframe-3dp');
                }

           });
            

        }

    }
})
})();