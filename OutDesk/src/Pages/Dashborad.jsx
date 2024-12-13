import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import swal from "sweetalert2";
import icons from "../assets/Icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import checkimg from "/images/Dashboard/A_blue_check.png";
import {
  addItem,
  deleteItem,
  getAllItems,
  updateItem,
} from "../Services/Reviews";

export default function Dashboard() {
  const [succedReview, setSuccedReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editReviewId, setEditReviewId] = useState(null);
  // Fetch all reviews
  const getAllReviews = async () => {
    try {
      const response = await getAllItems();
      setReviews(response);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new review
  const addReview = async (item) => {
    try {
      await addItem(item);
      setSuccedReview(true);
      getAllReviews(); // Fetch updated reviews after adding a new one
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  // get clicked review Id
  const handleEditClick = async (reviewId, currentReviewData) => {
    window.scrollTo(0, 0);
    setIsEditing(true);
    setEditReviewId(reviewId);
    formik.setValues(currentReviewData);
  };
  // Update Review
  const UpdateReview = async (editReviewId, Item) => {
    try {
      await updateItem(editReviewId, Item);
      setSuccedReview(true);
      setIsEditing(false);
      setEditReviewId(null);
      getAllReviews();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  // delete review
  const Deletreview = async (reviewId) => {
    swal
      .fire({
        title: "Are you sure you want to delete?",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await deleteItem(reviewId); // Await the delete action
            getAllReviews();
            // Fetch updated list after deletion
          } catch (error) {
            console.error("Error deleting student:", error);
          }
        }
      });
  };
  useEffect(() => {
    getAllReviews();
  }, []);

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      userName: "",
      position: "",
      rating: "",
      review: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("UserName is required"),
      position: Yup.string().required("Position is required"),
      rating: Yup.number()
        .required("Rating is required")
        .min(1, "Rating must not be less than 1")
        .max(5, "Rating must not be more than 5"),
      review: Yup.string()
        .required("Review is required")
        .min(50, "Review must be at least 50 characters")
        .max(500, "Review must not exceed 500 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (isEditing) {
        UpdateReview(editReviewId, values);
      } else {
        addReview(values);
      }
      resetForm();
      setTimeout(() => {
        setSuccedReview(false);
      }, 2000);
    },
  });

  return (
    <>
      <Navbar />
      <div className="container py-10">
        <section className="bg-white">
          <h2 className="mt-6 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Welcome back to Optech 🚀
          </h2>

          <div className="lg:grid lg:min-h-screen lg:grid-cols-12 gap-10">
            <main className="lg:col-span-5 xl:col-span-6 bg-slate-100 p-6 rounded-lg my-4">
              <h2 className="text-3xl py-2">Add a New Review</h2>

              <form
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={formik.handleSubmit}
              >
                {/* Name Input */}
                <div className="col-span-6">
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                    className="mt-1 w-full bg-neutral-200 h-9 rounded-md p-2 text-secondary outline-none border focus:border-neutral-500"
                  />
                  {formik.touched.userName && formik.errors.userName && (
                    <div className="text-red-600 text-sm italic mt-1">
                      {formik.errors.userName}
                    </div>
                  )}
                </div>

                {/* Position Input */}
                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.position}
                    className="mt-1 w-full bg-neutral-200 h-9 rounded-md p-2 text-secondary outline-none border focus:border-neutral-500"
                  />
                  {formik.touched.position && formik.errors.position && (
                    <div className="text-red-600 text-sm italic mt-1">
                      {formik.errors.position}
                    </div>
                  )}
                </div>

                {/* Rating Input */}
                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mt-1 w-full bg-neutral-200 h-9 rounded-md p-2 text-secondary outline-none border focus:border-neutral-500"
                  />
                  {formik.touched.rating && formik.errors.rating && (
                    <div className="text-red-600 text-sm italic mt-1">
                      {formik.errors.rating}
                    </div>
                  )}
                </div>

                {/* Review Textarea */}
                <div className="col-span-6">
                  <label
                    htmlFor="review"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Review
                  </label>
                  <textarea
                    name="review"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.review}
                    className="mt-1 w-full bg-neutral-200 h-[100px] rounded-md p-2 text-secondary outline-none border focus:border-neutral-500"
                  />
                  {formik.touched.review && formik.errors.review && (
                    <div className="text-red-600 text-sm italic mt-1">
                      {formik.errors.review}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className={`inline-block rounded-md px-12 py-3 text-sm font-medium transition focus:outline-none focus:ring 
                      ${
                        !formik.isValid
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                  >
                    {isEditing ? "Update Review" : "Create Review"}
                  </button>
                </div>
              </form>
            </main>
          </div>

          {succedReview && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-md shadow-lg text-center">
                <img src={checkimg} alt="Success" className="mx-auto w-20" />
                <p className="text-xl font-medium text-sky-700 mt-4">
                  Your review has been submitted successfully!
                </p>
              </div>
            </div>
          )}

          {/* Reviews Section */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} height={200} width="100%" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg shadow overflow-hidden"
                  >
                    <div className="flex justify-between">
                      <ul className="flex text-yellow-500">
                        {Array(review.rating)
                          .fill(null)
                          .map((_, i) => (
                            <li key={i}>
                              <icons.FaStar />
                            </li>
                          ))}
                        {review.rating < 5 &&
                          Array(5 - review.rating)
                            .fill(null)
                            .map((_, i) => (
                              <li key={i} className="text-gray-400">
                                <icons.FaStar />
                              </li>
                            ))}
                      </ul>
                      <div className="flex gap-2">
                        <icons.FaRegEdit
                          className="text-blue-600 cursor-pointer"
                          onClick={() => handleEditClick(review._id, review)}
                        />
                        <icons.MdDelete
                          className="text-red-600 text-sm italic mt-1 cursor-pointer"
                          onClick={() => Deletreview(review._id)}
                        />
                      </div>
                    </div>
                    <p className="mt-4  text-gray-700 px-2">
                      “{review.review}...”
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg">
                        {review.userName}
                      </h4>
                      <p className="text-sm text-gray-500">{review.position}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-lg mt-4">
                  No reviews available at the moment.
                </p>
              )}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}
