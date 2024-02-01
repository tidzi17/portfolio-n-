
import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import { formSchema } from "./formSchema";
import avatar from '../assets/grateful.png'
import axios from 'axios';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const messageBoxRef = useRef(null);

    const onSubmit = async (values, actions) => {
        try {
            await axios.post("https://formspree.io/f/xrgnpgeb", values);
            actions.setSubmitting(false);
            actions.resetForm();
            setIsSubmitted(true);
        } catch (error) {
            // Handle error
        }
    };

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: formSchema,
        onSubmit: onSubmit,
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit();
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} autoComplete="off" className="flex flex-col gap-10">
                <div className={`w-full h-12 border-[1px] border-black shadow-sm shadow-primaryGrey  relative`}>
                    <input
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="your first & last name"
                        className="w-full h-full bg-white  placeholder:pl-3 outline-none"
                    />
                    {errors.name && touched.name && <p className="absolute bottom-[-25px] text-black text-sm font-bold">{errors.name}</p>}
                </div>

                <div className={`w-full h-12 border-[1px] border-black shadow-sm shadow-primaryGrey  relative`}>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your email"
                        className="w-full h-full bg-white  placeholder:pl-3 outline-none"
                    />
                    {errors.email && touched.email && <p className="absolute bottom-[-25px] text-black text-sm font-bold">{errors.email}</p>}
                </div>

                <div className="w-full h-44 border-[1px] border-black shadow-sm shadow-primaryGrey relative">
                    <textarea
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="message"
                        name="message"
                        id="message"
                        placeholder="your message"
                        className="w-full h-full resize-none placeholder:pl-3 placeholder:pt-3 outline-none"></textarea>
                    {errors.message && touched.message && <p className="absolute bottom-[-25px] text-black text-sm font-bold">{errors.message}</p>}
                </div>
                <button disabled={isSubmitting} type="submit" className="w-2/5 px-1 py-2 shadow-sm shadow-primaryGrey bg-secondaryGrey text-white border-[1px] border-black rounded-3xl text-sm cursor-pointer transform duration-200 ease-in hover:bg-whitebgsec   hover:text-black">send message</button>
            </form>

            {isSubmitted && (
                <div ref={messageBoxRef} onClick={() => setIsSubmitted(false)} className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-30 flex justify-center items-center">
                    <div className="w-96 h-[500px] p-8 bg-zinc-900 shadow-zinc-800 shadow-sm rounded-lg ">
                        <div className="flex flex-col items-center text-center relative mb-10">
                            <p className="text-white">Message sent!</p>
                        </div>
                        <img src={avatar} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Form;




