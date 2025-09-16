import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen" role="status" aria-live="polite">
  <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent" />
  <span className="mt-4 text-primary text-sm font-medium">Loading...</span>
  <span className="sr-only">Loading content</span>
</div>

  );
};

export default Loader;
