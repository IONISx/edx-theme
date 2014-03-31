IocCourses = {};
IocCourses.validator = {};

IocCourses.validator.init = function() {
    IocCourses.validator.field_validator();
    IocCourses.validator.form_validator();
};

IocCourses.validator.field_validator = function () {
    $('input, textarea').each(function () {
        var field = $(this);
        var required = field.data('required');

        if (required)
            field.on("blur", IocCourses.validator.check_field);
    });
};

IocCourses.validator.mail_validator = function (field) {
    var mail = field.val();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(mail))
        field.removeClass("invalid-input").addClass("valid-input");
    else
        field.removeClass("valid-input").addClass("invalid-input");
};

IocCourses.validator.check_field = function () {
    var field = $(this);

    if (field.val().length > 0)
    {
        if (field.attr('type') == "email")
            IocCourses.validator.mail_validator(field);
        else
            field.removeClass("invalid-input").addClass("valid-input");
    }
    else
        field.removeClass("valid-input").addClass("invalid-input");
};

IocCourses.validator.form_validator = function () {
    $('form').each(function () {
        var form = $(this);
        var validator = form.data('validator');

        if (validator)
            form.on('submit', IocCourses.validator.submit_validator);
    });
};

IocCourses.validator.submit_validator = function (e) {
    var form = $(this);

    if (form.find('.invalid-input').length ||
        !form.find('.valid-input').length)
    {
        form.find('input').each(function () {
            var field = $(this);
            if (field.data('required') === true)
                IocCourses.validator.check_field.call(field);
        });
        form.find('.invalid-input').first().focus();
        return false;
    }
    return true;
};

$(document).ready(function () {
    IocCourses.validator.init();
});