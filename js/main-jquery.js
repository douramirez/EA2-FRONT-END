// Cambiar contenido de Etiqueta h1
    // Con JavaScript Puro
    // console.log("Pagina Funcionando")
    //document.getElementById('Titulo').innerHTML = "TITULO DE PAGINA";
   

// Incorporar Libreria JQuery


$(document).ready(function(){
    console.log("Pagina Funcionando");
    
    // SELECCIONAR ELEMENTOS HTML
    $('h1').html("Texto Modificado por su etiqueta");
    $('#Titulo').html("Texto Modificado por su Id");
    $('.display-3').html("Texto Modificado por su class");
    

    // AGREGAR CLASE  [ jq.classAdd ]
    $('h1').addClass('text-center text-uppercase');
    $('#p2').addClass('text-danger');
    
    // QUITAR CLASE  [ jq.classRemove ]
    $('#Parrafos').removeClass('display-5');

    // AGREGAR ELEMENTO [ jq.Append ]
    $('#Parrafos').append('<p>Cuarto Parrafo desde JQuery</p>');
    
    // QUITAR ELEMENTO [ jq.Remove ]
    //$('#p3').remove();

    // MODIFICAR PROPIEDADES CSS [ jqCssSet ]
    $('#p1').css('color', 'blue');
    $('#p3').css({color:'black', background: 'blue', padding: '20px'});
    
    // METODO attr()      [ jqAttrSet]
    //$('img').attr('src', 'https://www.fayerwayer.com/resizer/j5t99xUsygsnO8VAhqzTEvzC9l8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg');
    //$('img').attr({width : '300px', borderradius : '50%'});
    $('#Parrafos').append('<img src="">');
    $('img').attr('src', 'https://www.fayerwayer.com/resizer/j5t99xUsygsnO8VAhqzTEvzC9l8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg');
    $('img').attr({width : '300px'});
    
    
    // EVENTOS CON JQUERY
    //Evento click Agregando clase
    
    //Evento click Agregando estilo en css
    
    //Alternativa al evento click

})
