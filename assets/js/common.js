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

// Menu
$(function(){
    $open=false;
    
	function menuMb() {
		$(".menu").slideToggle();
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
    
	$('.btn-menu').on('click',function() {
		menuMb();
	});
});



$(function(){
    $open=false;
    function menuMb() {
        if($open==false){
            $open=true;
            $('.btn-bar').addClass('isActive');
            $(".list-menu").fadeIn();
        }else{
            $open=false;
            $('.btn-bar').removeClass('isActive');
            $(".list-menu").fadeOut();
        }
    }
    
    $('.btn-bar').on('click',function() {
        menuMb();
    });
});
