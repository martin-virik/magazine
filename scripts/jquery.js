(function($) {
    var app = {
        init : function (){
            console.log('jQuery ready!');
        }
    }


    $(document).ready(function(){
        app.init();    
    })
})(jQuery)