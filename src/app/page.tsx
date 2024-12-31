import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100 px-6 py-8 sm:px-12 sm:py-16 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-8 text-center">
        Welcome to the Home Page
      </h1>
      
      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center w-full max-w-lg">
        <Link 
          href="/approvalrecord" 
          className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition text-center"
        >
          TASK # 01
        </Link>
        <Link 
          href="/remainingdays" 
          className="w-full sm:w-auto px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition text-center"
        >
          TASK # 02
        </Link>
      </div>
    </div>
  );
}
