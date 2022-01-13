$(document).ready(function() {
    $('.question .q').click(function(event) {
        // 讓點擊到的 img 旋轉，切換active樣式
        $(this).find('img').toggleClass('active');

        // 讓點擊到的 h4 亮起來，切換active樣式
        $(this).find('h4').toggleClass('active');

        // 讓點擊到的 .q找到裡面的 P 判斷收闔
        $(this).parent().find('p').toggle();

        // 自己以外的 p 隱藏起來
        $(this).parent().siblings().find('p').hide();
        // 自己以外的 h4 移除u樣式
        $(this).parent().siblings().find('h4').removeClass('active');
        // 自己以外的 img 移除u樣式
        $(this).parent().siblings().find('img').removeClass('active');

    });
});