import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { sendEmail } from "../Services/SendEmail";
import checkimg from "/images/Dashboard/A_blue_check.png";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [succedReview, setSuccedReview] = useState(false);

  // send user message via email
  const sendMessage = async (data) => {
    try {
      await sendEmail(data);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      userEmail: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      phone: Yup.number().required("position is required"),
      userEmail: Yup.string()
        .email("Invalid email format")
        .required("email is required"),
      message: Yup.string()
        .max(500, "Message must not be more than 500 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendMessage(values);
      setLoading(true);
      setSuccedReview(true);
      resetForm();
      setTimeout(() => {
        setSuccedReview(false);
      }, 2000);
      setLoading(false);
    },
  });
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="grid grid-cols-12 py-20 lg:gap-10 ">
          <div className="col-span-12 md:col-span-5">
            <div>
              <h2 className=" text-[48px] leading-[1.15em] tracking-[-.03em] font-semibold text-secondary">
                Scale With Unbeatable ROI
              </h2>
              <p className="text-textcolor text-[15px] py-2">
                Virtual Assistants can save you{" "}
                <span className="text-xl text-secondary font-bold">
                  up to 70%
                </span>{" "}
                of the cost of a full-time employee – without the headaches of
                insurance, retirement, office & equipment costs, and
                unemployment.
              </p>
            </div>
            <div className="py-10 flex flex-row items-start justify-between">
              <div className="flex flex-col items-start justify-start">
                <span className="w-[48px] h-[48px] rounded-[6px] flex items-center  text-white justify-center text-[24px] mb-[10px] bg-secondary">
                  <FaLocationDot />
                </span>
                <h4 className="font-medium text-secondary text-lg">Address</h4>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=St+George+Chambers+74+George+Street+Luton+LU12BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-blue-600 hover:underline transition-all duration-300 ease-in-out"
                >
                  St George Chambers - <br />
                  74 George Street - Luton - LU12BD
                </a>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="w-[48px] h-[48px] rounded-[6px] flex items-center  text-white justify-center text-[24px] mb-[10px] bg-secondary">
                  <MdEmail />
                </span>
                <h4 className="font-medium text-secondary text-lg">E-mail</h4>
                <a
                  href="mailto:team@mybudgetstaff.com "
                  className="hover:text-primary hover:underline transition-all ease-in-out duration-300"
                >
                  team@mybudgetstaff.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="py-10 lg:px-10 px-8 bg-[#F5F6F7] rounded-md ">
              <h3 className="text-xl font-semibold text-secondary ">
                Fill The Contact Form
              </h3>
              <p className="text-textcolor py-2 text-[16px]">
                Feel free to contact with us, we don't spam your Email
              </p>
              <form
                className="grid grid-cols-12 py-6 gap-8"
                onSubmit={formik.handleSubmit}
              >
                <div className="col-span-12 md:col-span-6  overflow-hidden">
                  <input
                    className="bg-transparent border-b border-solid border-neutral-200 p-2 text-secondary outline-none focus:border-primary  lg:w-full"
                    type="text"
                    name="name"
                    placeholder="User Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-600 italic mt-1">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-12 md:col-span-6  overflow-hidden">
                  <input
                    className="bg-transparent border-b border-solid border-neutral-200 p-2 text-secondary outline-none focus:border-primary lg:w-full"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    name="phone"
                    placeholder="phone number"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-600 italic mt-1">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-12   overflow-hidden">
                  <input
                    className="bg-transparent border-b border-solid border-neutral-200 p-2 text-secondary outline-none focus:border-primary lg:w-full "
                    type="userEmail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userEmail}
                    name="userEmail"
                    placeholder="Email address"
                  />
                  {formik.touched.userEmail && formik.errors.userEmail ? (
                    <div className="text-red-600 italic mt-1">
                      {formik.errors.userEmail}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-12   overflow-hidden">
                  <textarea
                    className="bg-transparent border-b border-solid border-neutral-200   text-secondary outline-none focus:border-primary   resize-none h-[150px] lg:w-full"
                    type="text"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    placeholder="Write your message"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-600 italic mt-1">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                <div className="col-span-12">
                  <button
                    type="submit"
                    disabled={!formik.isValid || loading || formik.isSubmitting}
                    aria-disabled={!formik.isValid}
                    className={`cursor-pointer outline-none w-full inline-block shrink-0 rounded-md border border-blue-600 px-12 py-3 text-sm font-medium transition duration-200 
              ${
                !formik.isValid || loading
                  ? "bg-gray-800 border-none text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-transparent hover:text-blue-600"
              }
            `}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {succedReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg text-center">
            <img src={checkimg} alt="Success" className="mx-auto w-20" />
            <p className="text-xl font-medium text-sky-700 mt-4">
              Your message sent successfully!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
