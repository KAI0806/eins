var current;
$.scrollify({
    section:".scrollify",
    easing: 'easeOutExpo', // イージングを指定
    scrollSpeed: 100, // スクロール時の速度
    updateHash: false, // スクロール時アドレスバーのURLを更新
    setHeights:false,
    responsiveFallback:767,
    before:function(i,box){
        current = i;
    },
});

if (window.matchMedia( "(max-width: 767px)" ).matches) {
    $.scrollify.destroy({
        responsiveFallback:767,
    });
} else {
/* ウィンドウサイズが 768px以上の場合のコードをここに */
}


$(window).on('resize',function(){
    if(current){
        var currentScrl = $('.scrollify').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});