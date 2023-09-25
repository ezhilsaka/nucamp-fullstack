export const validateCommentForm = (values) => {
    const errors = {};

    if(typeof(values.rating) === 'undefined' || values.rating === 'Select...'){
        errors.rating = "Required";
        console.log(values.rating);
    }

    if(values.author.length < 2){
        errors.author = "Must be at lease 2 characters";
    } else if (values.author.length > 15){
        errors.author = "Must be 15 characters or less";
    }

    return errors; 
};