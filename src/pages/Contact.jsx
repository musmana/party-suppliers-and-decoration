import contactBg from "/contact-bg.png";
import dream6 from "/dream6.png";

export default function Contact() {
  return (
   <>
        <section className="relative w-full h-[90vh] md:h-[80vh] flex items-center justify-center">
         {/* Background Image */}
         <img
           src={contactBg}
           alt="Contact Us"
           className="absolute inset-0 w-full h-full object-cover"
         />
   
         {/* Text Content */}
         <div className="relative z-10 text-center text-white max-w-6xl w-full px-5 md:px-12">
           <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
             We bring <br />
             <span className="text-white">dream weddings</span> <br />
             to life!
           </h1>
         </div>
       </section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">Say Hello!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="8"
              placeholder="Enter Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-grayText hover:bg-gray-500 text-white font-semibold py-3 rounded-md transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-1">Vendors</h3>
            <p className="text-gray-700">
              If you are a registered vendor or a business looking to promote
              your brand on our portal, please send in your queries at{" "}
              <a
                href="mailto:vendors@company.com"
                className="text-gray-900 underline"
              >
                vendors@company.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">
              Marketing Collaborations
            </h3>
            <p className="text-gray-700">
              For brand collaborations – sponsored content, social media
              activations etc., please write to{" "}
              <a
                href="mailto:partnerships@company.com"
                className="text-gray-900 underline"
              >
                partnerships@company.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Wedding Submissions</h3>
            <p className="text-gray-700">
              &lt;Company Name&gt; features weddings across cultures, styles and
              budgets. To submit your wedding, kindly email us 15–20 photos at{" "}
              <a
                href="mailto:submissions@company.com"
                className="text-gray-900 underline"
              >
                submissions@company.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Careers</h3>
            <p className="text-gray-700">
              We are a team of passionate young minds looking to reinvent the
              wedding space. Please check our careers page for openings and
              email us at{" "}
              <a href="mailto:hr@company.com" className="text-gray-900 underline">
                hr@company.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Customers</h3>
            <p className="text-gray-700">
              We love to hear from our precious users. For any feedback or
              queries, simply write to{" "}
              <a href="mailto:info@company.com" className="text-gray-900 underline">
                info@company.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

           <section className="max-w-6xl mx-auto my-16 px-5">
             <div className="flex flex-col md:flex-row items-center border border-gray-300 bg-gray-50 p-6 md:p-8 rounded-md shadow-sm">
               {/* Left Image */}
               <div className="md:w-1/2 w-full">
                 <img
                   src={dream6}
                   alt="Balloon Decoration"
                   className="rounded-md object-cover w-full h-[340px]"
                 />
               </div>
       
               {/* Right Content */}
               <div className="md:w-2/2 w-full md:pl-10 mt-6 md:mt-0 flex flex-col justify-between text-center md:text-left">
                 <div>
                   <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">
                     Your Dreams, Our <span className="font-extrabold">Dreams...</span>
                   </h2>
                   <p className="text-gray-700 text-lg leading-relaxed">
                     We love to hear from our precious users. For any feedback or
                     queries simply write in to....
                   </p>
                 </div>
       
                 <div className="mt-8 md:mt-10">
                   <button className="bg-grayText hover:bg-gray-600 text-white px-10 py-3 float-right font-semibold transition-all duration-300">
                     View
                   </button>
                 </div>
               </div>
             </div>
           </section>
    </>
  );
}
