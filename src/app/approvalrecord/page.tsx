"use client";

import React, { useState } from "react";

interface Record {
  id: number;
  name: string;
  isLoading: boolean;
  isApproved: boolean;
}

const mockRecords: Omit<Record, "isLoading" | "isApproved">[] = [
  { id: 1, name: "Record 1" },
  { id: 2, name: "Record 2" },
  { id: 3, name: "Record 3" },
];

export default function ApproveRecords() {
  const [records, setRecords] = useState<Record[]>(
    mockRecords.map((record) => ({
      ...record,
      isLoading: false,
      isApproved: false,
    }))
  );

  const handleApprove = (id: number) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === id ? { ...record, isLoading: true } : record
      )
    );

    setTimeout(() => {
      setRecords((prevRecords) =>
        prevRecords.map((record) =>
          record.id === id ? { ...record, isLoading: false, isApproved: true } : record
        )
      );
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100 py-10 px-6 sm:px-12 sm:py-16">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-8 text-center">
          Approve Records
        </h1>
        <ul className="space-y-6">
          {records.map((record) => (
            <li
              key={record.id}
              className="flex justify-between items-center p-6 bg-white border border-teal-200 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <span className="text-lg font-medium text-teal-800">
                {record.name}
              </span>
              <button
                onClick={() => handleApprove(record.id)}
                disabled={record.isLoading || record.isApproved}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${
                  record.isApproved
                    ? "bg-teal-300 text-white cursor-not-allowed"
                    : record.isLoading
                    ? "bg-teal-500 text-white cursor-wait"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {record.isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    Loading...
                  </span>
                ) : record.isApproved ? (
                  "Approved"
                ) : (
                  "Approve"
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
