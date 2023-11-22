export const isAccountValue = (value) => {
    return !value || value.trim().length < 1;
};

// Check if the email is in the correct format
export const isEmailValid = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};
