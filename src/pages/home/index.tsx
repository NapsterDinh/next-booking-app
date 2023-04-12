import RoutePage from "@pageComponents/home/RoutePage";
import { NextPage } from "next";

/** HomePage*/
const Index: NextPage<any> = (props) => {
  return <RoutePage {...props} />;
};

export async function getServerSideProps() {
  try {
    // const props = await RoutePageStore.initialize({ context });
    const props = {};
    return { props };
  } catch (error) {
    // return AppStore.handleError({ context, error });
  }
}
export default Index;
