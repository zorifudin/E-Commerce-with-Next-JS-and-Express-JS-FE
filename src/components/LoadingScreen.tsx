import React from "react";

const LoadingScreen = () => {
  return (
    <div className="bg-opacity-50 fixed top-0 left-0 flex h-full w-full items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-6">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
        </div>

        <div className="text-black">
          <h2 className="mb-2 text-xl font-bold">Loading...</h2>
          <p className="text-sm">Mohon tunggu sebentar</p>
        </div>

        <div className="mt-4 flex justify-center space-x-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-black"></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-black"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-black"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
