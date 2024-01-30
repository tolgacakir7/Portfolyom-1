
    $(document).ready(function(){
        $('.tolga').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
    })

    $('.header  .navbar, .menuarea').click(function(){
        if ($('.menuarea').hasClass('active')) {
            $('.menuarea').removeClass('active')
           
           
        }else{
            $('.menuarea').addClass('active')
        }
    });
    $('.navbar').click(function(){
        $(this).toggleClass('active')
    });

    $('.bar').click(function(){
        $(this).toggleClass('active')
    });

    $(window).scroll(function(){
        $('.bars .bar').each(function(){
            if($(window).scrollTop() + $(window).height() >= $(this).offset().top){
                $(this).addClass('active');
             }else{$(this).removeClass('active');}
        });
    });

    console.log($('.bars .bar').length)

   