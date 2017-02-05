(function($) {

    var app = {
        init : function (){
            console.log('jQuery ready!');
            this.update();

            $('form#comments-form').on('submit', this.onSubmit);

            $('#file-button').on('click', function(e) {
                e.preventDefault();
                $('form input[name="file"]').trigger('click');
            });
        },

        onSubmit: function(event) {
            event.preventDefault();
            var data = $( this ).serializeArray();

            if (app.validateEmail(data[1].value)) {
                app.hideEmailError(this);
                app.storeComment(data, function(res) {
                    if (res) {
                        app.update();
                    } else {
                        alert('Sorry, we were not able to save your comment');
                    }
                });
            } else {
                app.showEmailError(this);
            }

            return false;
        },

        validateEmail: function(email) {
            return email.match(/(.*)@(.*)\.(.*)/);
        },

        showEmailError: function(form) {
            $(form).find('input[name="email"]').parents('.form-group').addClass('has-error');
            $(form).find('.alert').removeClass('hidden');
        },

        hideEmailError: function(form) {
            $(form).find('input[name="email"]').parents('.form-group').removeClass('has-error');
            $(form).find('.alert').addClass('hidden');
        },

        storeComment: function(data, cb) {
            $.post('/api/comments', {
                    name: data[0].value,
                    email: data[1].value,
                    comment: data[2].value,
                }, function(res) {
                    if (res.error) {
                        console.error(res.error);
                        cb(null);
                    } else {
                        cb(res);
                    }
            });
        },

        getComments: function(cb) { 
            $.get('/api/comments', function(res) {
                if (res.error) {
                    console.error(res.error);
                    cb([]);
                } else {
                    cb(res);
                }
            });
        },

        update: function() {
           var commentsDiv =  $('#comments');
           commentsDiv.html('');
           var template = $('#comments-template > .panel');

           this.getComments(function(comments) {
                comments.forEach(function(comment, index) {
                    var commentTemp = template.clone();
                    commentTemp.find('.name').text(comment.name);
                    commentTemp.find('.email').text(comment.email);
                    commentTemp.find('.comment').text(comment.comment);

                    commentsDiv.append(commentTemp);
                    commentTemp.removeClass('hidden');
                });
           });

        }
    }

    $(document).ready(function(){
        app.init();    
    })
    
})(jQuery)