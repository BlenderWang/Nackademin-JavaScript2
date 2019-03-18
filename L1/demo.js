$(document).ready(function() {
    // add items onto to-do list
    $('.btn').click(function(e) {
        const itemAdd = $('#itemList').val();
        if(itemAdd === '') return;
        $('ul').append('<li>' + itemAdd + '</li>');
        e.preventDefault();
        $('#itemList').val('');
    });

    // remove item from list
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('strike').fadeOut('slow');
    });

    // sort list items
    $('#sortable').sortable();
});