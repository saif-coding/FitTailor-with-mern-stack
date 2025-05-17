import React from "react";
function Contact() {
  return (
    <section className="bg-white text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Contact Us</h2>
      <form className="max-w-2xl mx-auto space-y-4 border bg-[#F5F5F8] p-12 border-black rounded-md">
        <input className="w-full p-3 rounded-full border outline-none  text-black" placeholder="Name" />
        <input className="w-full p-3 rounded-full border outline-none  text-black" placeholder="Email" />
        <textarea
          className="w-full p-3 rounded border outline-none text-black"
          placeholder="Your Message"
          rows="4"
        ></textarea>
        <button className="bg-[#3CB4AC] hover:bg-[#16FEF4] hover:text-black  text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
