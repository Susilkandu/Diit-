export const validatePhotoUpload = (photo) => {
    return typeof photo === 'string' && photo.trim().length > 0;
};

export const validateName = (name) => {
    return typeof name === 'string' && name.trim().length > 0;
};

export const validateFatherName = (fatherName) => {
    return typeof fatherName === 'string' && fatherName.trim().length > 0;
};

export const validateMotherName = (motherName) => {
    return typeof motherName === 'string' && motherName.trim().length > 0;
};

export const validateGender = (gender) => {
    return typeof gender === 'string' && ['male', 'female'].includes(gender);
};

export const validateAddress = (address) => {
    return typeof address === 'string' && address.trim().length > 0;
};

export const validateMobileNumber = (mobileNumber) => {
    const mobileNumberRegex = /^[6-9]\d{9}$/;
    const mobileNumberRegex12 = /^[6-9]\d{11}$/;
    return typeof mobileNumber === 'string' && (mobileNumberRegex.test(mobileNumber) || mobileNumberRegex12.test(mobileNumber));
};
    

export const validateDOB = (dob) => {
    return typeof dob === 'string' && dob.trim().length > 0;
};

export const validateCourse = (course) => {
    return typeof course === 'string' && course.trim().length > 0;
};

export const validateCategory = (category, otherCategory) => {
    return typeof category === 'string' && (category !== "other" || (typeof otherCategory === 'string' && otherCategory.trim().length > 0));
};
