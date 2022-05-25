var current;
$.scrollify({
    section:".scrollify",
    easing: 'easeOutExpo', // イージングを指定
    scrollSpeed: 100, // スクロール時の速度
    updateHash: false, // スクロール時アドレスバーのURLを更新
    setHeights:false,
    responsiveFallback:600,
    before:function(i,box){
        current = i;
    },
});

$(window).on('resize',function(){
    if(current){
        var currentScrl = $('.scrollify').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});