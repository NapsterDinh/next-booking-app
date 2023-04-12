import { NextPage, NextPageContext } from "next";

const ErrorPage: NextPage<any> = ({ statusCode }) => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>;
};

ErrorPage.getInitialProps = (ctx: NextPageContext) => {
  const { res, err } = ctx;

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
