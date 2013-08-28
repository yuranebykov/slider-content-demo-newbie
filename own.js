var animation = "easeInCubic";
var durationaAnimation = 1000;

$(document).ready(function() {
    
    var pages = new Array(), pageActive;
    
    for(var i = 0; i < $("#navigation a").length; i++) {
        pages.push($($("#navigation a")[i]).data('page'));
    }
    
    $('#navigation a').click(function(e) {
        pageClicked = e.target.dataset.page;
        console.log(e);
        if(pageActive) $('#content [data-page='+pageActive+']').css('z-index', '1');
        if(pageClicked != pageActive) {
            $('#content [data-page='+pageClicked+']')
                .css('z-index', '2')
                .animate({'left': '0'}, durationaAnimation, animation, function() {
                    for(var i = 0; i < pages.length; i++) {
                        if(pageClicked != pages[i]) $('#content [data-page='+pages[i]+']').css('left', '100%');
                    }
                });
            pageActive = pageClicked;
        } else {
            $('#content [data-page='+pageClicked+']').animate({'left': '100%'}, durationaAnimation, animation);
            pageActive = undefined;
        }        
    })
});