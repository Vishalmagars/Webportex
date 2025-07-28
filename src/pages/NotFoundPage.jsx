import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex items-center justify-center bg-white px-6 md:px-12">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight text-black mb-6">
          Page Not Found
        </h1>
        <p className="text-base text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved. Please check the URL or return home.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-sm uppercase tracking-widest border-b border-black hover:opacity-70 transition pb-1"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
