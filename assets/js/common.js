function parts(rootDir,File){
 var date = new Date();
 var result = date.toISOString().substring(0,15).replace(/[:|\-]/g,"");

   $.ajax({
       url: rootDir + "library/" + File + '?_=${result}',
       cache: true,
       async: false,
       dataType: 'html',
       success: function(html){
           html = html.replace(/\{\$root\}/g, rootDir);
           document.write(html);
       }
   });
}

$(document).ready(function () {
    let url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");

    let dir = url.substring(0, url.lastIndexOf('/')),
        dirRegExp = new RegExp(dir.replace(/\/$/, '') + "$");

    if ($('body').hasClass("top")) {
        $('.menu li a.top').addClass('isActive');
    } else {
        $('.menu  li  a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
            if (dirRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
        });
    }
});




$(function(){
    $open=false;
    function menuMb() {
        if($open==false){
            $open=true;
            $('.menu__icon').addClass('isActiveMenu');
            $(".menu__nav").fadeIn();
        }else{
            $open=false;
            $('.menu__icon').removeClass('isActiveMenu');
            $(".menu__nav").fadeOut();
        }
    }
    
    $('.menu__icon').on('click',function() {
        menuMb();
    });
    $('.menu li a').on('click',function() {
        menuMb();
    });

});

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
