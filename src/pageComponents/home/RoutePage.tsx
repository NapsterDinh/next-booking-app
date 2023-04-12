import { ErrorBoundary } from "components/ErrorBoundary";
import Loader from "components/Loader/Loader";
import { NextPage } from "next";
import { Suspense } from "react";

/** HomePage Component*/
const RoutePage: NextPage<any> = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <div>111</div>
      </ErrorBoundary>
    </Suspense>
  );
};
export default RoutePage;
