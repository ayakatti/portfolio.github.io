var _window = $(window),
    _header = $('.site-header'),
    aboutBottom;
 
_window.on('scroll',function(){
    aboutBottom = $('.about').height();
    if(_window.scrollTop() > aboutBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');