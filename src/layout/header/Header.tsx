import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const sets = [
  {
    icon: <CiTwitter />,
    url: "",
  },
  {
    icon: <CiFacebook />,
    url: "",
  },
  {
    icon: <FaPinterest />,
    url: "",
  },
  {
    icon: <CiInstagram />,
    url: "",
  },
  {
    icon: <FaReddit />,
    url: "",
  },
  {
    icon: <CiYoutube />,
    url: "",
  },
];

const Header: React.FC = () => {
  return (
    <main className="flex items-center justify-center px-6 bg-secondary700 border-b border-white ">
      <nav className="container mx-auto p-[12px] flex items-center justify-between">
        <div className="text-[12px] sm:text-sm text-white">
          Welcome to Shopem online eCommerce store.
        </div>
        <div className="flex items-center  ">
          <div className="hidden items-center border-r pr-4 md:flex">
            <div className="text-white mr-2">Follow us:</div>
            <div className="flex items-center gap-2">
              {sets.map((item) => (
                <Link key={uuidv4()} to={item.url}>
                  <div className="text-white w-4 min-h-4">{item.icon}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center pl-4 gap-x-4">
            <div className="flex items-center ">
              <div className="text-white mr-2 text-sm font-normal">Eng</div>
              <IoIosArrowDown className="text-white" />
            </div>
            <div className="flex items-center ">
              <div className="text-white mr-2 text-sm font-normal">USD</div>
              <IoIosArrowUp className="text-white" />
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
