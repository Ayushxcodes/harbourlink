"use client";
import React from 'react';

const ReportsButton: React.FC = () => {
  // Handle opening the reports page in a new tab
  const handleOpenReports = (): void => {
    window.open(`${window.location.origin}/report/download`, '_blank');
    // Corrected path
  };

  return (
    <section id='Report' className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
          View Reports
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Access, view, and download all your comprehensive reports with just one click.
        </p>
        <button
          onClick={handleOpenReports}
          className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-lg group bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ease-out"></span>
          <span className="relative flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Open Reports Dashboard
          </span>
        </button>
        <div className="mt-4 text-sm text-gray-500">
          Opens in a new tab
        </div>
      </div>
    </section>
  );
};

export default ReportsButton;
