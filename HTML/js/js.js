const _menu = $('.menu');
const _submenu = $('.sub-menu');


_menu.on('click', function() {
    _submenu.hasClass('active') ? _submenu.removeClass('active') : _submenu.addClass('active');
})