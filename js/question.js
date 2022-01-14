$(document).ready(function() {
    $('.question .q').click(function(event) {
        // 讓點擊到的 img 旋轉，切換active樣式
        $(this).find('img').toggleClass('active');

        // 讓點擊到的 .q 找到裡面的 p 判斷收闔
        $(this).parent().find('p').toggle();

        // 自己以外的 p 隱藏起來
        $(this).parent().siblings().find('p').hide();
 
        // 自己以外的 img 移除樣式
        $(this).parent().siblings().find('img').removeClass('active');

    });
});