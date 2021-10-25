$(document).ready ( function() {

    $('.ui.form')
        .form({
            fields: {
                text  : 'empty',
                password : ['minLength[6]', 'empty'],
            }
        });










});