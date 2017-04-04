$(document).ready(function () {
    $('.spoiler_links').click(function () {
        $(this).parent().children('div.spoiler_body').toggle('normal');
        return false;
    });

    $('.a-zi')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show animated zoomIn',
            classToRemove: 'a-hide',
            offset: 100,
            callbackFunction: function (elem, action) {

            }
        });

    $('.a-fr')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show animated fadeInRight',
            classToRemove: 'a-hide',
            offset: 200,
            callbackFunction: function (elem, action) {

            }
        });

    $('.a-fl')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show animated fadeInLeft',
            classToRemove: 'a-hide',
            offset: 200,
            callbackFunction: function (elem, action) {

            }
        });

    $('.a-t')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show animated tada',
            classToRemove: 'a-hide',
            offset: 200,
            callbackFunction: function (elem, action) {

            }
        });
});

