import { LinkCardLayoutWrapper } from "../components/Layout/LinkCardLayoutWrapper";
import { ContainerLayoutWrapper } from "../components/Layout/ContainerLayoutWrapper";
import { Links } from "../components/Link";

const Home = () => {
  return (
    <ContainerLayoutWrapper>
      <h1 className="text-xl flex justify-center mb-10 font-bold">
        Welcome to Ken&apos;s links
      </h1>
      <LinkCardLayoutWrapper>
        <Links />
      </LinkCardLayoutWrapper>
    </ContainerLayoutWrapper>
  );
};
export default Home;
