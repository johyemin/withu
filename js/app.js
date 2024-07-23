$(function () {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }

        ]


    });

    $(window).scroll(function(){
    
        if( $(this).scrollTop() > 100 ){
          $("#top").addClass("on");
        }
        else{
          $("#top").removeClass("on");
        }
        
      });

      $("#top").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
      });


    const toggleHam = document.getElementsByClassName("ham");
    const subMenu = document.getElementById("h_submenu")


    $(toggleHam).click(function(){
        $(this).toggleClass('open');

        if($(this).hasClass('open')){
            $(subMenu).addClass('active')
        } else {
            $(subMenu).removeClass('active')
        }
    })


    

    $(".reception").on({
        click: function () {
            $(".sec4_slide1").attr('src', './img/section_4_reception.jpg')
        }
    });

    $(".office").on({
        click: function () {
            $(".sec4_slide1").attr('src', './img/section_4_office.jpg')
        }
    });

    $(".chair").on({
        click: function () {
            $(".sec4_slide1").attr('src', './img/section_4_chair.jpg')
        }
    });

    $(".room").on({
        click: function () {
            $(".sec4_slide1").attr('src', './img/section_4_room.jpg')
        }
    });

    $(".mirror").on({
        click: function () {
            $(".sec4_slide1").attr('src', './img/section_4_mirrow.jpg')
        }
    });

    $(".electric").on({
        click: function () {
            $(".sec4_slide1").attr('src', './img/section_4_electric.jpg')
        }
    })

    $(".thum").mouseover(function(){
        $(this).css('opacity', '1')
    })

    
    $(".thum").mouseout(function(){
        $(this).css('opacity', '0.5')
    })

    /////
});