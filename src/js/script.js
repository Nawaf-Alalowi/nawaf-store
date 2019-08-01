
$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();
    
    $('[data-add-to-cart]').click(function(e) {
        $(".notify").append("<b>Appended text</b>");
        e.stopPropagation();
    });
});