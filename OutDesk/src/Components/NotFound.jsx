import { Link } from "react-router-dom";
import NOTFoundImg from "/images/Not Found/Capture_prev_ui.png";
export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <div className="w-100 h-60 overflow-hidden my-4">
          <img src={NOTFoundImg} alt="notfounded" />
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-secondary sm:text-4xl">
          Oops, this page is not found
        </h2>

        <p className="mt-4 text-gray-500">
          The page you’re looking for can’t be found. Double-check the URL and
          try again.
          <br /> we invite you to visit our homepage.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
