'use client';

import { useEffect } from 'react';
import {PersonStandingIcon} from 'lucide-react'
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Global error caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-red-50 via-red-100 to-red-200 px-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-10 text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4 select-none"><PersonStandingIcon/></h1>
        <h2 className="text-3xl font-bold mb-2 text-red-700">Oops! Something went wrong.</h2>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-md font-semibold shadow-md hover:bg-red-700 transition"
        >
          Try Again
        </button>
      </div>
      <p className="mt-8 text-sm text-gray-500 select-none">
        If the problem persists, please contact support.
      </p>
    </div>
  );
}
