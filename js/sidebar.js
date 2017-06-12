/**
 * Created by john on 2017/6/6.
 */
$(function () {
    var $li = $(".sidebar>ul>li");
    $li.click(function () {
        $(this).next().slideToggle("1000").siblings("ul").slideUp("1000");
    })
})