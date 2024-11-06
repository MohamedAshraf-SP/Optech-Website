import React, { useEffect, useMemo, useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import TestemonileBlock from "../../Components/TestemonileBlock";
import { getAllItems } from "../../Services/Reviews";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import TestemonilesSection from "../../Sections/TestemonilesSection";

export default function Reviews() {
  // const [reviews, setReviews] = useState([]);
  // const [loading, setLoading] = useState(true);

  // // Load all reviews
  // const getAllReviews = async () => {
  //   try {
  //     const response = await getAllItems();
  //     setReviews(response);
  //   } catch (error) {
  //     console.error("Error fetching reviews:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAllReviews();
  // }, []);

  return (
    <>
      <Navbar />

      {/* {!reviews.length === 0 && (
          <div className="py-4">
            <h2 className="mainTitle md:!pt-10 !pt-6">Our clients Reviews</h2>
            <hr className="w-40 h-1 mx-auto bg-primary rounded-xl" />
          </div>
        )} */}
      {/* {loading ? (
          // Show skeleton loader while data is being fetched
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="my-4">
                <Skeleton height={200} width="100%" />
              </div>
            ))}
          </div>
        ) : reviews.length > 0 ? (
          // Show reviews when data is available
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
              {reviews.map((block, index) => (
                <div className="my-4" key={index}>
                  <TestemonileBlock
                    stars={block?.rating}
                    description={block?.review}
                    Name={block?.userName}
                    Position={block?.position}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center flex-col justify-center mx-auto py-10">
              <h2 className="md:text-3xl text-2xl font-bold mt-10 py-2">
                Have a Review?
              </h2>
              <p className="text-textcolor py-2 text-xl text-center">
                We will be happy if you share your review here
                <br />
                Let's try to see it
              </p>
              <Link
                to="/Contact"
                className="p-4 bg-[#E2E3EC] text-secondary font-semibold rounded-md hover:text-white hover:bg-secondary transition-Transiton"
              >
                Add Your Review Now
              </Link>
            </div>
          </div>
        ) : ( */}
      <TestemonilesSection />
      <div className="flex items-center flex-col justify-center mx-auto py-10">
        <h2 className="md:text-3xl text-2xl font-bold mt-10 py-2">
          Have a Review?
        </h2>
        <p className="text-textcolor py-2 text-xl text-center">
          We will be happy if you share your review here
          <br />
          Let's try to see it
        </p>
        <Link
          to="/Contact"
          className="p-4 bg-[#E2E3EC] text-secondary font-semibold rounded-md hover:text-white hover:bg-secondary transition-Transiton"
        >
          Add Your Review Now
        </Link>
      </div>

      <Footer />
    </>
  );
}
