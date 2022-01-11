$(document).ready(function() {
    $('.question h4').click(function(event) {

        // 讓點擊到的 h4 亮起來，其他h4移除active樣式
        $(this).toggleClass('active');

        // 讓點擊到的 h4找到父元素 .question ，再找裡面的 P 判斷收闔
        $(this).parent().find('p').toggle();

        // 自己以外的 p 隱藏起來
        $(this).parent().siblings().find('p').hide();
        // 自己以外的 h4 移除u樣式
        $(this).parent().siblings().find('h4').removeClass('active');

    });
});