$( document ).ready(function() {
    $('.galeria img').each(
        function(index){
            $(this).css('cursor','pointer')
            $(this).click(function () {
                $('#imagemfull').attr('src',$(this).attr('src'))
                $('.modal').show();
            })
    });
    $('.fecha-img').click(function () {
        $('.modal').hide();
    })
  });


