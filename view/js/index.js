$('#enviar').click(function(event) {
    event.preventDefault();
    let data = [];
        $('.cadastro input').each(
            function(index){  
                var input = $(this);
                if((input.val()).trim() == "") {
                    $(this).removeClass('is-active')
                    $(this).addClass('is-invalid')
                }else if($(input).attr('type') == 'email') {
                        
                    if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                            $(this).removeClass('is-active')
                            $(this).addClass('is-invalid')
                        }else{
                            $(this).removeClass('is-invalid')
                            $(this).addClass('is-valid')
                        }

                }else{
                    $(this).removeClass('is-invalid')
                    $(this).addClass('is-valid')
                }
            }
        );
        $('.cadastro select').each(
            function(index){
                var input = $(this);
                if(input.val() == null) {
                    $(this).removeClass('is-active')
                    $(this).addClass('is-invalid')
                }else{
                    $(this).removeClass('is-invalid')
                    $(this).addClass('is-valid')
                }
            }
        );

        $('.cadastro textarea').each(
            function(index){
                var input = $(this);
                if((input.val()).trim() == "") {
                    $(this).removeClass('is-active')
                    $(this).addClass('is-invalid')
                }else{
                    $(this).removeClass('is-invalid')
                    $(this).addClass('is-valid')
                }
            }
        );

        let sexo = document.getElementsByName("sexo");
        let selected;


        for(i in sexo) {
            if(sexo[i].checked){
            selected = true;
            }
        }
        if (!selected) {
            for(i in sexo) {
                $(sexo[i]).removeClass('is-active')
                $(sexo[i]).addClass('is-invalid')
            }
        }else{
            for(i in sexo) {
                $(this).removeClass('is-invalid')
                    $(this).addClass('is-valid')
            }
        }


        var ckbox = $('.termos');
        if(ckbox.is(":checked") === false) {
            $(ckbox).removeClass('is-active')
            $(ckbox).addClass('is-invalid')
        }else{
            $(ckbox).removeClass('is-invalid')
            $(ckbox).addClass('is-valid')
        }

        
    
})