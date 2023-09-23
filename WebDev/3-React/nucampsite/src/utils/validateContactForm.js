export const validateContactForm = (values) => {
    const errors = {};

    if(!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2){
        errors.firstName = 'Must be at lease 2 characters.';
    } else if (values.firstName.length > 15){
        errors.firstName = 'Must be 15 characters or less';
    }

    if(!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2){
        errors.lastName = 'Must be at lease 2 characters.';
    } else if (values.lastName.length > 15){
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if(!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The Phone number should contain only numbers.';
    }

    if(!values.email.includes('@')){
        errors.email = 'Email should contain a @';
    }

    return errors;
}