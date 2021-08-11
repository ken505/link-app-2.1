import { ContainerLayoutWrapper } from "../components/Layout/ContainerLayoutWrapper";
import { Links } from "../components/Link";

const Home = () => {
  return (
    <ContainerLayoutWrapper>
      <h1 className="text-xl flex justify-center mb-10 font-bold">
        Welcome to Ken&apos;s links
      </h1>
      <Links />
    </ContainerLayoutWrapper>
  );
};
export default Home;
