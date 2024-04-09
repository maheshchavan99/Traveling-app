

export const formvalidation = (validationValues: any, inputFieldsData: any) => {
  const error: any = {};
  inputFieldsData.forEach((each: any) => {
    const {name, label, required, validationRegex} = each;
    const value = validationValues[name];
    if (required && !value) {
      error[name] = `${label} is required`;
    } else if (value && validationRegex && !validationRegex.test(value)) {
      error[name] = `${label} is Invalid`;
    }
  });
  return error;
};



export const signIninputFieldsData = [
  {
    label: 'Email',
    placeholder: 'Enter your email',
    keyboardType: 'email-address',
    secureTextEntry: false,
    required: true,
    validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: 'email',
  },
  {
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password',
    keyboardType: 'default',
    secureTextEntry: true,
    required: true,
  },
];

export const inputFieldsData = [
  {
    label: 'First Name',
    name: 'firstname',
    placeholder: 'Enter your First Name',
    secureTextEntry: false,
    required: true,
  },
  {
    label: 'Last Name',
    name: 'lastName',
    placeholder: 'Enter your Last name',
    secureTextEntry: false,
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    keyboardType: 'email-address',
    secureTextEntry: false,
    required: true,
    validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  {
    label: 'Phone Number',
    name: 'phoneNumber',
    placeholder: 'Enter your phone number',
    keyboardType: 'phone-pad',
    secureTextEntry: false,
    required: true,
    validationRegex: /^\d{10}$/,
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    keyboardType: 'default',
    secureTextEntry: true,
    required: true,
    // validationRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  },
];
