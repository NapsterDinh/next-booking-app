import RoutePage from "@pageComponents/home/RoutePage";
import { GetServerSidePropsContext, NextPage } from "next";

/** HomePage*/
const Index: NextPage<any> = (props) => {
  return <RoutePage {...props} />;
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  try {
    // const props = await RoutePageStore.initialize({ context });
    const props = {};
    return { props };
  } catch (error) {
    // return AppStore.handleError({ context, error });
  }
}
export default Index;
