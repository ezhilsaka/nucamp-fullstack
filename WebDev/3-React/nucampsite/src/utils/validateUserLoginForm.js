export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.userName) {
        errors.userName = 'Required';
    } else if (values.userName.length < 6){
        errors.userName = 'Username must of of atleast 6 characters';
    } else if (values.userName.length > 15){
        errors.userName = 'Username cant be more than 15 characters';
    }

    if(!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8){
        errors.password = 'Must be at lease 8 characters.';
    } 

    return errors;
}