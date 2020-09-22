$(document).ready(function () {
    $('.modal-content').hide();
})
$(document).ready(function () {
    $('#btnthem').click(function () {
        $('.modal-content').show();
        //$('.content').css('opacity') = '0.4';
        $('.content').css('opacity', '0.4');
        $('.menu').css('opacity', '0.4');
        //$('.menu').css('opacity') = '0.4';
        
    })
})