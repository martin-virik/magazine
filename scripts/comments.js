(function($) {

    var app = {
        init : function (){
            console.log('jQuery ready!');
            this.update();

            $('form#comments-form').on('submit', this.onSubmit)
        },

        onSubmit: function(event) {
            event.preventDefault();
            var data = $( this ).serializeArray();

            if (app.validateEmail(data[1].value)) {
                app.hideEmailError();
                app.storeComment(data);
            } else {
                app.showError();
            }

            return false;
        },

        validateEmail: function(email) {
            // check email
            return true;
        },

        showEmailError: function() {
            
        },

        hideEmailError: function() {
            
        },

        storeComment: function(data) {
            var comments = this.getComments();

            comments.push({
                name: data[0].value,
                email: data[1].value,
                comment: data[2].value,
            })

            localStorage.comments = JSON.stringify(comments);
        },

        getComments: function() {
            var comments;
            try {
                comments = JSON.parse(localStorage.comments);
            } catch (error) {
                console.error(error);
                comments = [];
            }

            return comments;
        },

        update: function() {
           var comments = this.getComments();
        }
    }

    $(document).ready(function(){
        app.init();    
    })
    
})(jQuery)