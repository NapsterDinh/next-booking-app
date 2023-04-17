import RoutePage from "@pageComponents/home/RoutePage";
import { NextPage } from "next";
import React from "react";

/** HomePage*/
const Index: NextPage<any> = (props) => {
  return <RoutePage {...props} />;
};

export async function getServerSideProps() {
  try {
    // const props = await RoutePageStore.initialize({ context });
    const props = { test: 123 };
    return { props };
  } catch (error) {
    // return AppStore.handleError({ context, error });
  }
}
export default Index;
