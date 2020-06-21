$(document).ready(function () {

    function gridChanger(obj, removeGrid, addGrid) {
        $('.product-item').removeClass('col-lg-' + removeGrid).addClass('col-lg-' + addGrid);
        $('.grid-item').removeClass('active');
        obj.addClass('active');
    }

    $('.grid-item').click(function () {
        var grid = $(this).data('grid');
        if (grid === 3) {
            gridChanger($(this), 3, 4);
        } else if (grid === 4) {
            gridChanger($(this), 4, 3);
        }
    });
    
});