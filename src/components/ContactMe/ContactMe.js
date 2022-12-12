import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import  { useRef } from "react";

const ContactMe = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_fw1aj2r",
                "template_h866lwi",
                form.current,
                "w1lyvILBFbG3awpdD"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div id='contact' className='pt-8'>
            <section className="py-6  ">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className='flex items-center'>
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Jamalpur, Bangladesh.</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>+880-1853-239027</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <a href="mial:jillurahmanjibon@gmail.com">  <span>jillurahmanjibon@gmail.com</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}
                        className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block" htmlFor='name'>
                            <span className="mb-1 block font-semibold">Full name</span>
                            <input type="text" required id='name' name="user_name" placeholder="Leroy Jenkins" className="block w-full bg-gray-800 font-semibold input input-bordered input-primary   " />
                        </label>
                        <label htmlFor="email" className="block">
                            <span className="mb-1 block font-semibold">Email address</span>
                            <input id='email' type="email" name="user_email" required placeholder="email@example.com" className="block bg-gray-800 font-semibold w-full input input-bordered input-primary " />
                        </label>
                        <label htmlFor='message' className="block">
                            <span className="mb-1 block font-semibold">Message</span>
                            <textarea rows="3" id='message' name="message" required className="block w-full bg-gray-800 font-semibold textarea textarea-primary" spellCheck="false" placeholder='Enter Your Message---'></textarea>
                        </label>
                        <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                    </form>
                    <span className="text1">{done && "Thanks for Contacting me"}</span>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;