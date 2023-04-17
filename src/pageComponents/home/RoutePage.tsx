import { ErrorBoundary } from "components/ErrorBoundary";
import Loader from "components/Loader/Loader";
import useTranslate from "hooks/useTranslate";
import { CustomerLayout } from "layouts/CustomerLayout";
import { NextPage } from "next";
import { Suspense } from "react";

/** HomePage Component*/
const RoutePage: NextPage<any> = (props) => {
  const { data } = useTranslate();
  console.log(data["common:new-address"]);

  // console.log(resource["common:username"]);

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <CustomerLayout>
          <div>{data["common:new-address"]}</div>
        </CustomerLayout>
      </ErrorBoundary>
    </Suspense>
  );
};
export default RoutePage;
