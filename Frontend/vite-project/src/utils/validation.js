export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidMobile = (mobile) => {
    // Basic check: 10 digits
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
};

export const isValidName = (name) => {
    // Only letters and spaces, at least 2 characters
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name.trim());
};
