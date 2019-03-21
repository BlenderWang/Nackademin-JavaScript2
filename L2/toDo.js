$(document).ready(function() {
    //   add items to list
    $('.btn').click(function() {
    const itemAdd = $('#listItem').val();
    if(itemAdd === '') {
        $('.message').show();
        return;
    }else {
        $('.message').hide();
        $('ul').append('<li>' + itemAdd + '</li>');
        $('#listItem').val('');
    }
    });

//   press enter key instead of clicking add btn
    $('#listItem').keypress(function(e) {
    if(e.keyCode == 13) {
        $('.btn').click();
        e.preventDefault();
    }
    });

//   to scratch/fade out an item
    $('ul').on('click', 'li', function() {
    $(this).toggleClass('strike').fadeOut('slow');
    })

//   optional: sort to do list items
    $('.sortable').sortable();
});