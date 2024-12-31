'use client'
import React, { useState } from 'react';

function calculateRemainingDays(endTime: string): number {
  const currentDate = new Date();
  const targetDate = new Date(endTime);

  if (isNaN(targetDate.getTime())) {
    return -1; // Invalid date
  }

  const diffTime = targetDate.getTime() - currentDate.getTime();
  return Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24))); // Convert milliseconds to days
}

export default function Home() {
  const [dateInput, setDateInput] = useState('');
  const [remainingDays, setRemainingDays] = useState<number | null>(null);

  const handleSubmit = () => {
    const days = calculateRemainingDays(dateInput);
    setRemainingDays(days);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100 p-6 sm:px-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-700 mb-6 tracking-tight">
        Professional Countdown Timer
      </h1>

      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border border-teal-200">
        <label
          htmlFor="date"
          className="block text-lg font-medium text-gray-700 mb-4"
        >
          Enter a future date:
        </label>
        <input
          id="date"
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full mt-6 px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all"
        >
          Calculate Remaining Days
        </button>
      </div>

      {remainingDays !== null && (
        <div className="mt-8 text-center">
          {remainingDays >= 0 ? (
            <>
              <h2 className="text-2xl font-semibold text-teal-800 mb-4">
                Days Remaining:
              </h2>
              <p
                className={`text-5xl font-bold ${
                  remainingDays > 0 ? 'text-teal-600' : 'text-red-500'
                }`}
              >
                {remainingDays}
              </p>
              {remainingDays === 0 && (
                <p className="text-red-500 text-md mt-2">
                  The date is today or has already passed!
                </p>
              )}
            </>
          ) : (
            <p className="text-red-600 text-lg mt-4">
              Invalid date. Please enter a valid future date.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
