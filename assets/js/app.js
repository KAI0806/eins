$('.header_btn').on('click', function () {
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
});

$(window).scroll(function(){
    var top = $("#mv").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
    var position_bottom = top + $("#mv").height();  // ターゲットが下からスクロールしたときに見える位置
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
        $('.is-active').removeClass('is-active');
        $('.btn01').addClass('is-active');  
    }else{
      // それ以外の動き
    }
})

$(window).scroll(function(){
    var top = $("#concept").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
    var position_bottom = top + $("#concept").height();  // ターゲットが下からスクロールしたときに見える位置
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
        $('.is-active').removeClass('is-active');
        $('.btn02').addClass('is-active');  
    }else{
      // それ以外の動き
    }
})

$(window).scroll(function(){
    var top = $("#summary").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
    var position_bottom = top + $("#summary").height();  // ターゲットが下からスクロールしたときに見える位置
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
        $('.is-active').removeClass('is-active');
        $('.btn03').addClass('is-active');  
    }else{
      // それ以外の動き
    }
})

$(window).scroll(function(){
    var top = $("#recruit").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
    var position_bottom = top + $("#recruit").height();  // ターゲットが下からスクロールしたときに見える位置
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
        $('.is-active').removeClass('is-active');
        $('.btn04').addClass('is-active');  
    }else{
      // それ以外の動き
    }
})

$(window).scroll(function(){
    var top = $("#contact").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // ターゲットが上からスクロールしたときに見える位置
    var position_bottom = top + $("#contact").height();  // ターゲットが下からスクロールしたときに見える位置
    if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
        $('.is-active').removeClass('is-active');
        $('.btn05').addClass('is-active');  
    }else{
      // それ以外の動き
    }
})