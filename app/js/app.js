//Script-load Utility
$.loadScript = function (url, callback) {
    $.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: false
    });
}

//Load managed scripts
$.loadScript('js/FirebaseAdapter.js');
$.loadScript('js/ngApp.js');
$.loadScript('js/ngControllers.js');

