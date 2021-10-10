$(document).ready(function() 
{
    var botao = $('.inicio');
    var dropDown = $('.ul-Inicio');    
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() 
{
    var botao = $('.album');
    var dropDown = $('.ul-albuns');    
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() 
{
    var botao = $('.adm');
    var dropDown = $('.ul-administracao');    
    botao.on('click', function(event)
    {
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

