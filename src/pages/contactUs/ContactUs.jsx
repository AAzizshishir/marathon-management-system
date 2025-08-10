import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Get form data as FormData object
    const formData = new FormData(e.target);

    // Convert to plain object
    const formObj = Object.fromEntries(formData.entries());

    axios
      .post(
        "https://marathon-management-system-server-ten.vercel.app/contact",
        formObj
      )
      .then((res) => {
        e.target.reset(); // reset form
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Marathon Added Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <SectionTitle>
        <h1 className="text-center">Contact Us</h1>
      </SectionTitle>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Whether you have questions, feedback, or
            want to collaborate, feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Marathon St, Dhaka, Bangladesh</p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+880 1234 567890</p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p>support@milesmatter.com</p>
            </div>

            <div>
              <h3 className="font-semibold">Working Hours</h3>
              <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject of your message"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary cursor-pointer text-black py-2 rounded disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
