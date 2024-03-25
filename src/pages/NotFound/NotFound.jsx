import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="text-center h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">{error.status}</h1>
      <p>
        <i>{error.statusText}</i> <br />
        <i>{error.error.message}</i>
      </p>
      <p className="mb-4 text-lg mt-2">Oops! Looks like you&#39;re lost.</p>
      <div className="animate-bounce">
        <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <p className="mt-4">
        Let&apos;s get you back{" "}
        <Link to="/" className="text-primary-green">
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
