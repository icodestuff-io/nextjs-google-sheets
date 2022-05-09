import type { NextPage } from "next";
import Head from "next/head";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let form = {
          name,
          email,
          phone,
          message
      }

      const rawResponse = await fetch('/api/submit', {
        method:'post',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(form)

      });

      const content = await rawResponse.json();
      
      alert("Thank you for your response click ok to clear the form.")

      setMessage('')
      setPhone('')
      setEmail('')
      setName('')

     
  }
  return (
    <div className="antialiased p-2 bg-gradient-to-r from-cyan-400 to-teal-600">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Form</title>
      </Head>
      <div className="flex w-full min-h-screen justify-center items-center ">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 backdrop-blur-xl bg-[#ffffff65] w-full max-w-4xl p-8 rounded-lg shadow-xl shadow-[#27d4e0f9] overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-3xl text-white tracking-wide">
                Contact Form
              </h1>
              <p className="pt2 text-teal-100 text-m">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                ducimus Eos.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-y-2 items-center">
                <PhoneIcon className="h-5 text-slate-200 mt-2 mr-1" />
                <span className="text-white">+(91)866 922 1951</span>
              </div>
              <div className="inline-flex space-y-2 items-center">
                <MailIcon className="h-5 text-slate-200 mt-2 mr-1" />
                <span className="text-white">Contactus@website.com</span>
              </div>
              <div className="inline-flex space-y-2 items-center">
                <LocationMarkerIcon className="h-5 text-slate-200 mt-1 mr-1" />
                <span className="text-white">21, street 43 ,Delhi </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-[1.4rem] text-white"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-[1.4rem] text-white"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-[1.4rem] text-white"
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="h-[1.4rem] text-white"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 backdrop-blur-sm bg-white/80 rounded-lg shadow-lg p-7 md:w-[82] text-gray-600 ">
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-sm">
                    Name <text className="text-red-700">*</text>
                  </label>

                  <input 
                    value={name} onChange={e => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm">
                    Phone <text className="text-red-700">*</text>
                  </label>

                  <input
                    value={phone} onChange={e => setPhone(e.target.value)}
                    type="tel"
                    name="phone"
                    id="phone"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm">
                    Email Address <text className="text-red-700">*</text>
                  </label>

                  <input
                    value={email} onChange={e => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Your Feedback
                  </label>

                  <textarea
                    value={message} onChange={e => setMessage(e.target.value)}
                    name="message"
                    id="message"
                    className="ring-1 ring-gray-300 w-full rounded-md border-0 shadow-md px-4 py-2 focus:ring-teal-300 focus:ring-2 outline-none mt-2"
                    placeholder="Your Feedback"
                  />
                </div>
                <button type="submit" className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg py-2 px-6">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
