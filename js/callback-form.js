const callbackForm = document.querySelector('.callback-form-container');

const requestReceivedModal = document.querySelector('#request-received');

const callbackInputName = document.querySelector('#callback-form-input-name');
const callbackInputMail = document.querySelector('#callback-form-input-email');
const callbackInputPhone = document.querySelector('#callback-form-input-phone');

callbackInputPhone.addEventListener('click', function () {
    if (!callbackInputPhone.value.trim()) {
        callbackInputPhone.value = '+380';
    }
})

callbackInputPhone.addEventListener('blur', function () {
    if (callbackInputPhone.value === '+380') {
        callbackInputPhone.value = '';
    }
})



callbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let hasError = false;

    if (!callbackInputName.value.trim()) {
        callbackInputName.classList.add('callback-form-input-error');
        hasError = true;
    } else {
        callbackInputName.classList.remove('callback-form-input-error');
    }

    if (!callbackInputMail.value.trim() || !isEmailValid(callbackInputMail.value)) {
        callbackInputMail.classList.add('callback-form-input-error');
        hasError = true;
    } else {
        callbackInputMail.classList.remove('callback-form-input-error');
    }


    if (!callbackInputPhone.value.trim() || !isPhoneValid(callbackInputPhone.value)) {
        callbackInputPhone.classList.add('callback-form-input-error');
        hasError = true;
    } else {
        callbackInputPhone.classList.remove('callback-form-input-error');
    }

    if (hasError) {
        return;
    }

    callbackInputName.value = ''
    callbackInputMail.value = ''
    callbackInputPhone.value = ''


    requestReceivedModal.classList.add('modal-active');

    setTimeout(function () {
        requestReceivedModal.classList.remove('modal-active');
    }, 2000);
});

function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

    return phone.match(regexp);
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}