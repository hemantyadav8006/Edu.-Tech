// Navaigation Bar
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});
$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});