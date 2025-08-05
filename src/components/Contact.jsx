import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact With Us</h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex gap-4 flex-row'>
          <div className='w-full md:w-1/2 text-left'>
            <label className='block mb-2 font-medium'>Your Name</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4'
              type='text'
              name='Name'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left'>
            <label className='block mb-2 font-medium'>Your Email</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4'
              type='email'
              name='Email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>

        <div className='my-6 text-left'>
          <label className='block mb-2 font-medium'>Message</label>
          <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none'
            name='Message'
            placeholder='Message'
            required
          ></textarea>
        </div>

        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition'>
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
