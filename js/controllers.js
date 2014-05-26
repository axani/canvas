var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', function ($scope) {
    $scope.testVar = 'hello world';

    // Show ContextMenu
        var timeoutID = 0;
        $('.canvas').mousedown(function(event) {
            $('.contextmenu').css({'top': event.pageY + 'px', 'left': event.pageX + 'px'});
            timeoutID = setTimeout("$('.contextmenu').show()", 500);
        }).bind('mouseup mouseleave', function() {
            $('.contextmenu').hide();
            clearTimeout(timeoutID);
        });

    $('.add-box').mouseup(function(event) {
        var boxType = $(this).attr('data-add-type');
        posY = $('.contextmenu').css('top');
        posX = $('.contextmenu').css('left');
        $('.canvas').append('<div style="top: ' + posY + '; left: ' + posX + '" class="box ' + boxType + '"></div>');
    });
});