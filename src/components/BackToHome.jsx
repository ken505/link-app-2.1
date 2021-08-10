import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export const BackToHome = () => {
  return (
    <Link href="/">
      <a>
        <div className="flex items-center w-48 mx-auto mb-7">
          <div>
            <IoIosArrowBack />
          </div>
          <div>Back to Home</div>
        </div>
      </a>
    </Link>
  );
};
