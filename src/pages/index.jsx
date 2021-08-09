import { CardLayoutWrapper } from "../components/layout/cardLayoutWrapper";
import { ContainerLayoutWrapper } from "../components/layout/containerLayoutWrapper";
import { Links } from "../components/Links";

const Home = () => {
  return (
    <ContainerLayoutWrapper>
      <main>
        <h1 className="text-xl flex justify-center mb-10 font-bold">
          Welcome to Ken&apos;s links
        </h1>
        <CardLayoutWrapper>
          <Links />
        </CardLayoutWrapper>
      </main>
    </ContainerLayoutWrapper>
  );
};
export default Home;
