import { ContainerLayoutWrapper } from "../components/Layout/ContainerLayoutWrapper";
import { BackToHome } from "../components/BackToHome";
import { AboutItem } from "../components/AboutItem";
import { AboutCardLayoutWrapper } from "../components/Layout/AboutCardLayoutWrapper";

const About = () => {
  return (
    <ContainerLayoutWrapper>
      <BackToHome />
      <AboutCardLayoutWrapper>
        <h2 className="text-2xl text-bold text-center">Self introduction</h2>
        <br />
        <p>
          Im into Next.js, supabase and Tailwindcss 🚀
          <br />
          <br />I focus on curiosity, passion, and Range of perspectives 📛
        </p>
      </AboutCardLayoutWrapper>
      <AboutItem />
      <AboutCardLayoutWrapper>
        <h2 className="text-2xl text-bold text-center mb-5">Living habits</h2>
        <ul>
          <li className="mb-3">🏃🏻‍♂️ HIIT</li>
          <li className="mb-3">🏋🏻‍♀️ Weight training</li>
          <li className="mb-3">📖 Reading books</li>
        </ul>
      </AboutCardLayoutWrapper>
      <AboutCardLayoutWrapper>
        <h2 className="text-2xl text-bold text-center mb-5">Hobbies</h2>
        <ul>
          <li className="mb-3"> 📸 Photography</li>
          <li className="mb-3">✍🏻 Illustration</li>
          <li className="mb-3">🎸 Playing guitar</li>
          <li className="mb-3">🥁 Drumming</li>
          <li className="mb-3">🎥 Video Editing</li>
        </ul>
      </AboutCardLayoutWrapper>
      <AboutCardLayoutWrapper>
        <h2 className="text-2xl text-bold text-center mb-5">Likes</h2>
        <ul>
          <li className="mb-3">🐈 Cat</li>
          <li className="mb-3">🏎 Formula 1</li>
          <li className="mb-3">
            <a href="https://www.youtube.com/channel/UCFkncXKwLRtA2MFdXOv34yQ">
              🕹 Nephrite
            </a>
          </li>
        </ul>
      </AboutCardLayoutWrapper>
    </ContainerLayoutWrapper>
  );
};
export default About;
{/* <div>
  <h2>Self introduction</h2>
  <ul>
    Top 10 most important values 🌟
    <li>⭐️健康：健やかで体調よく生きる。</li>
    <li>⭐️成長：変化と成長を維持する。</li>
    <li>⭐️創造：新しくて斬新なアイデアを生む。</li>
    <li>⭐️冒険：新しくてワクワクする体験をする。</li>
    <li>⭐️挑戦：難しい仕事や問題に取り組む。</li>
    <li>⭐️知識：価値ある知識を学び、生み出す。</li>
    <li>⭐️有益：他人の役に立つこと。</li>
    <li>⭐️危険：リスクを取りチャンスを手に入れる。</li>
    <li>⭐️調和：周囲の環境と調和しながら生きる。</li>
    <li>⭐️受諾：ありのままの自分を受け入れる。</li>
  </ul>
</div>; */}
