import React from "react";
import MoviesClient from "./MoviesClient";

export default function Page() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <MoviesClient/>
    </React.Suspense>
  );
}
