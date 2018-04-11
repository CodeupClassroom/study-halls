
///////////////////////////////////////////////////////
// fading navbar depending on how far we've scrolled //
///////////////////////////////////////////////////////

$nav = $('nav');
$(window).on('scroll', function() {
    var currentScrollOffset = $(window).scrollTop();
    var desiredNavbarOpacity = (100 - (currentScrollOffset / 3)) / 100;
    $nav.css('opacity', desiredNavbarOpacity);
})





















/////////////////////////////
// jquery traversing bonus //
/////////////////////////////

// how do we model this?
var pictures = {
    left: 'puppy1.jpeg',
    middle: 'puppy2.jpeg',
    right: 'puppy3.jpeg',
};

function updatePictureSources() {
    $('#left img').attr('src', pictures.left);
    $('#middle img').attr('src', pictures.middle);
    $('#right img').attr('src', pictures.right);
}

function swapLeftAndMiddle() {
    // get the "old" or previous values
    var oldLeft = pictures.left;
    var oldMiddle = pictures.middle;

    // set the new values
    pictures.left = oldMiddle;
    pictures.middle = oldLeft;

    updatePictureSources();
}

function swapRightAndMiddle() {
    // get the "old" or previous values
    var oldRight = pictures.right;
    var oldMiddle = pictures.middle;

    // set the new values
    pictures.right = oldMiddle;
    pictures.middle = oldRight;

    updatePictureSources();
}

$('#left button').click(swapLeftAndMiddle)
$('#right button').click(swapRightAndMiddle)
$('#middle button').click(function() {
    // randomly either swap right or left
    if (Math.random() > .5) {
        swapRightAndMiddle();
    } else {
        swapLeftAndMiddle();
    }
})
