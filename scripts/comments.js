(function($) {

    var app = {
        init : function (){
            console.log('jQuery ready!');
            this.update();
        },

        onSubmit: function(event) {
            // stop submitting, validate and store
        },

        validateEmail: function(email) {
            // check email
        },

        showError: function() {
            
        },

        storeComment: function() {
            // save to locals
        },

        getComments: function() {
            // get from locals
        },

        update: function() {
           var comments = this.getComments();
        }
    }

    $(document).ready(function(){
        app.init();    
    })
    
})(jQuery)