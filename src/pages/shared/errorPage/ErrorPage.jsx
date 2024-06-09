import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-4">
      <h2 className="sm:text-3xl text-xl">404 Error - Page Not Found</h2>
      <Link to="/">
        <button className="bg-primary px-4 py-2 font-medium text-white rounded ">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
