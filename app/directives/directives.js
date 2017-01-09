(function () {
    'use strict';
    angular.module('app.e-siat') 
    //Hacer el Navbar fixed apartir de cierta altura de la pantalla
    .directive("scroll", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
           $(window).scroll(function (){
                var wScroll = $(this).scrollTop();
                if(wScroll > 640){
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