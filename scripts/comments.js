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
                app.update();
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

            comments.unshift({
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
                console.info('Nothing there yet');
                comments = [];
            }

            return comments;
        },

        update: function() {
           var commentsDiv =  $('#comments');
           commentsDiv.html('');
           var comments = this.getComments();

           var template = $('#comments-template > .panel');
           comments.forEach(function(comment, index) {
               var commentTemp = template.clone();
               commentTemp.find('.name').text(comment.name);
               commentTemp.find('.email').text(comment.email);
               commentTemp.find('.comment').text(comment.comment);

               commentsDiv.append(commentTemp);
               commentTemp.removeClass('hidden');
           });
        }
    }

    $(document).ready(function(){
        app.init();    
    })
    
})(jQuery)