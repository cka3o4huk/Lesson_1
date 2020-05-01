jQuery(window).ready(function(){

    $('#show-more').click(function(){
        $('body').find('#more-emotions').slideToggle('400');
    });


    $('.seo_block a').click(function(){
        $(this).prev().toggleClass('expand');
        return false;
    });

    $(".fancybox").fancybox({
        maxWidth    : 1920,
        maxHeight   : 3000,
        fitToView   : false,
        width       : '100%',
        height      : '100%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });

//    window.addEventListener("popstate", function() {
//        var state = History.getState();
//
//        var url = state.url;
//
//        console.log(url);
//        if(url == 'http://xn--e1aahkmbcuqemy5k.xn--p1ai/' && $('iframe-wrap').css({display : "block"})) {
//
//            $('body').css("overflow","auto");
//            $('body').find('.iframe-wrap').fadeOut(200);
//        }
//
//    });

});



jQuery(document).ready(function() {

    new WOW().init();

    jQuery(".scroll").viewportChecker({

        classToAdd: "visible animate",
        offset: 100
       });




$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
    


$('.form-zakaz').submit(function(){
        var error = false;
        var form = $(this);

        form.find('input[type=text], textarea').each( function(){
            if ($(this).val() == '') {
                $(this).focus().addClass('error'); error = true;
            } else {
                $(this).focus().removeClass('error');
            }
        });

        if (!error) {
            var data = form.serialize();
            console.log(form.serialize());
            $.ajax({
                type: "POST",
                url: "/ajax/form.php",
                dataType: 'json',
                data: data,

                beforeSend: function(data) { // событие до отправки
                    form.find('button[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                  },

                success: function(data){

                        $('.modal').modal('hide');
                        $('#Modalstatus').modal('show');

                        $('#Modalstatus').find('h3').html('Спасибо за Вашу заявку<br> в ближайшее время мы Вам перезвоним.'); // пишем что все ок
                        setTimeout(function () {
                           $('#Modalstatus').modal('hide');
                        }, 2500);

                        form.find('input[type=text], textarea').val('');
                    
                },
                error: function (data) {
               
                    $('.modal').modal('hide');
                    $('#Modalstatus').modal('show');
                    $('#Modalstatus').find('h3').html('Ошибка. Попробуйте позже.');
                    setTimeout(function () {
                        $('#Modalstatus').modal('hide');
                    }, 2500);
                    clearForm();
                 },

                complete: function (data) { // событие после любого исхода
                    form.find('button[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                 }

            });
        }
        return false;
    });


// $(function(){
//     $(window).scroll(function() {
//         var top = $(document).scrollTop();
//             if (top <100) $("#menu").removeClass('stick');
//             else $("#menu").addClass('stick');

//     });
// });

function clearForm()
{
    $('input[type=text],input[type=phone],input[type=email],textarea').val("");
}
   

});



   /**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});

//$('.iframe-show').click(function(){
//   $('body').find('.iframe-main .cont').html('');
//    $('body').find('.iframe-main .cont').html('<img src="/css/fancybox_loading.gif" class="loading" alt="" />');
//
//    $('body').css("overflow","hidden");
//
//    var work = $(this).attr('work');
//
//    $.ajax({
//        url: work,
//        type: 'POST',
//        dataType: 'html',
//    })
//    .done(function(data) {
//
//        history.pushState('', '', work);
//
//        var cut_data = $(data).find('.foriframe').html();
//        
//        $('body').find('.iframe-main .cont').html(cut_data);
//
//    });
//    
//    $('body').find('.iframe-wrap').fadeIn(200);
//    return false;
//});

//$('.iframe-close').click(function(){
//
//    history.pushState('', '', 'http://xn--e1aahkmbcuqemy5k.xn--p1ai/');
//    $('body').css("overflow","auto");
//    $('body').find('.iframe-wrap').fadeOut(200);
//    return false;
//});


$(document).ready(function(){
	$('.mobileBtnMenu').click(function(){
		$('.topMenuWrap').slideToggle();
	});
});
