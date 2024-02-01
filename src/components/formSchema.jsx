import * as yup from "yup";



export const formSchema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "i've said first & last names").required("first and last names are required"),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'please correct email').required('email is required'),
    message: yup.string().required("you trying to send message without message??"),
});