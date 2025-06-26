import React from "react";
import TvClient from "./TvClient";

export default function Page() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TvClient />
    </React.Suspense>
  );
}
