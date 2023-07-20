// import { GETJobDetails } from "@app/api/jobdetails/route";
import ErrorFallback from "@components/ErrorFallback";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import path from "path";

const jobdetails = async ({ params }: { params: { id: string } }) => {
  //   const jobDetails = await GETJobDetails(params.id);

  console.log(process.cwd() + path.join("/img", "iconography", "moon.svg"));

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="headline-2">{"Let's find your dream job"}</h2>
          {/* Current Date */}
          <p className="body-8 text-natural-6">
            {new Date().toLocaleString("en-us", {
              weekday: "long",
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          {/* PlaceHolder Component (Replace with real) */}
          {/* Job Details & Inline Job Card */}
          <section className="flex justify-between">
            {/* Job Details */}
            {/* <p>{jobDetails}</p> */}
            {/* Inline Job Cards */}
          </section>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default jobdetails;
