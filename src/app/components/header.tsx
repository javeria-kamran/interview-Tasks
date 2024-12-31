// components/Header.tsx
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#011627] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* App Title */}
        <h1 className="text-xl font-bold text-[#94D2BD]">My App</h1>
        
        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-[#0A9396] transition">
            Home
          </Link>
          <Link href="/approvalrecord" className="hover:text-[#0A9396] transition">
            TASK-01
          </Link>
          <Link href="/remainingdays" className="hover:text-[#0A9396] transition">
            TASK-02
          </Link>
        </nav>
      </div>
    </header>
  );
}
