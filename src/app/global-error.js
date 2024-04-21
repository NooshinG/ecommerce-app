"use client";

import ErrorComponent from "@/components/error";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <ErrorComponent
          handleError={() => reset()}
          errorMessage={error.message}
        />
      </body>
    </html>
  );
}
