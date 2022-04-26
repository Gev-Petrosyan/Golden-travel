$(function(){

    $('#nav-button').on('click', function(){
        $('.nav-ul').css({
            'display': 'block',
        });
    });
    $('#nav-close').on('click', function(){
        $('.nav-ul').css({
            'display': 'none',
        });
    });

})