import React from 'react';

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center space-y-2">
    <div className="spinner w-12 h-12 border-4 border-diesel-300 border-t-diesel-500 rounded-full animate-spin"></div>
    <p className="text-diesel-700 text-lg font-semibold">Loading...</p>
  </div>
);

export default LoadingSpinner;
