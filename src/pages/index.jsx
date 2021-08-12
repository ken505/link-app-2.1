import { ContainerLayoutWrapper } from "../components/Layout/ContainerLayoutWrapper";
import { LinkCollection } from "../components/LinkCollection";

const Home = () => {
  return (
    <ContainerLayoutWrapper>
      <h1 className="text-xl flex justify-center mb-10 font-bold">
        Welcome to Ken&apos;s links
      </h1>
      <LinkCollection />
    </ContainerLayoutWrapper>
  );
};
export default Home;
