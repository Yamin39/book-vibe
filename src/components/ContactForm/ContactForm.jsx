import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-[#55bcc833] p-6 lg:p-14 rounded-3xl justify-center items-center mb-12">
      <div className="w-full md:w-fit flex flex-col justify-center gap-6">
        <div>
          <h2 className="text-[1.75rem] font-bold font-playfair-display mb-2 text-dark">Get in touch</h2>
          <p className="max-w-80 text-dark-80 font-medium">Fill up the form and our team will get back to you within 24 hours</p>
        </div>
        <ul className="text-[#131313B3] space-y-2">
          <li className="flex items-center gap-2">
            <CiPhone className="text-lg" />
            <span>+88017345628910</span>
          </li>
          <li className="flex items-center gap-2">
            <CiMail className="text-lg" />
            <span>support@bookvibe.com</span>
          </li>
          <li className="flex items-center gap-2">
            <CiLocationOn className="text-lg" />
            <span>Dhaka, Mirpur 10</span>
          </li>
        </ul>
        <div>
          <h2 className="text-lg text-dark-80 mb-2">Follow us</h2>
          <ul className="flex gap-4 text-dark-70 text-xl">
            <li>
              <FaFacebook className="hover:scale-125 duration-300 cursor-pointer" />
            </li>
            <li>
              <FaTwitter className="hover:scale-125 duration-300 cursor-pointer" />
            </li>
            <li>
              <FaInstagram className="hover:scale-125 duration-300 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-80 bg-white rounded-2xl p-6">
        <form>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a message..."
              defaultValue={""}
            />
          </div>
          <div className="mt-5">
            <button className="btn w-full hover:opacity-80 hover:bg-[#50B1C9] py-3 min-h-0 text-lg font-semibold text-white md:px-7 md:py-[0.65rem] h-auto bg-[#50B1C9] rounded-xl">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
