import { Link as RouterLink } from "react-router-dom";
import Logo from "../../assets/svg/LogoWarning.svg";
import { FaArrowRight } from "react-icons/fa6";
import DarkApp from "../../assets/svg/linkToTheAPP/Dark Mode=True, Status=False, Type=App Store.png";
import DarkGoogle from "../../assets/svg/linkToTheAPP/Dark Mode=True, Status=False, Type=Goolge Play.png";
import {
  popularTagArray,
  quickLinksArray,
  topCategoryArray,
} from "./interfaces";
import { useState } from "react";

function Footer() {
  const [tagName, setTagName] = useState<string>("");

  const handleClickTag = (tag: string): void => {
    setTagName(tag);
  };
  return (
    <main className="flex flex-col items-center justify-center bg-gray900 px-4">
      <section className="container mx-auto w-full py-[72px] flex justify-center sm:justify-between flex-wrap gap-y-16 gap-x-7">
        {/* Footer section first */}
        <div className="flex flex-col gap-6 items-center sm:items-stretch">
          <RouterLink to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Website Logo" />
            <span className="text-gray0 text-[32px] font-bold">Shopem</span>
          </RouterLink>
          <div className="flex flex-col gap-3 items-center sm:items-stretch">
            <nav>
              <span className="text-gray500 text-sm">Customer Supports:</span>
              <p className="text-gray0 text-lg font-medium">(629) 555-0129</p>
            </nav>
            <span className="text-gray500 text-base max-w-[248px] text-center sm:text-left">
              4517 Washington Ave. Manchester, Kentucky 39495
            </span>
            <p className="text-gray0 text-lg font-medium">info@kinbo.com</p>
          </div>
        </div>
        {/* Footer section second */}
        <div className="flex flex-col gap-3">
          <nav className="flex items-center ">
            <span className="text-gray0 text-base font-medium uppercase">
              Top Category
            </span>
          </nav>
          <div className="flex flex-col">
            {topCategoryArray.map(({ id, link, linkName }) => (
              <RouterLink
                key={id}
                to={link as string}
                className={`${
                  id === 4 && "flex items-center gap-2"
                } hover:text-gray100 duration-300 py-[6px] text-sm font-medium text-gray400`}
              >
                {id === 4 && (
                  <span className="block w-6 h-[2px] bg-warning500 "></span>
                )}
                {linkName}
              </RouterLink>
            ))}
            <RouterLink
              to="/"
              className="hover:text-gray100 duration-300 py-[6px] flex items-center gap-2 text-sm font-medium text-warning500"
            >
              Browse All Product <FaArrowRight />
            </RouterLink>
          </div>
        </div>
        {/* Footer section third */}
        <div className="flex flex-col gap-3">
          <nav className="flex items-center">
            <span className="text-gray0 text-base font-medium uppercase">
              Quick links
            </span>
          </nav>
          <div className="flex flex-col">
            {quickLinksArray.map(({ id, link, linkName }) => (
              <RouterLink
                key={id}
                to={link as string}
                className="hover:text-gray100 duration-300 py-[6px] text-sm font-medium text-gray400"
              >
                {linkName}
              </RouterLink>
            ))}
          </div>
        </div>
        {/* Footer section fourth */}
        <div className="flex flex-col gap-5 items-center sm:items-stretch">
          <nav className="flex items-center">
            <span className="text-gray0 text-base font-medium uppercase">
              Download APP
            </span>
          </nav>
          <div className="flex flex-col gap-3">
            <img src={DarkApp} alt="" />
            <img src={DarkGoogle} alt="" />
          </div>
        </div>
        {/* Footer section fifth */}
        <div className="flex flex-col gap-5 sm:items-stretch items-center">
          <nav className="flex items-center">
            <span className="text-gray0 text-base font-medium uppercase">
              Popular Tag
            </span>
          </nav>
          <div className="flex flex-wrap justify-center sm:justify-normal  gap-4 sm:gap-2 max-w-[300px]">
            {popularTagArray.map(({ id, tag }) => (
              <RouterLink
                key={id}
                to="/"
                onClick={() => handleClickTag(tag)}
                className={`${
                  tag === tagName && "bg-gray800 border-gray0"
                } hover:bg-gray800 hover:border-gray0 duration-300 py-[6px] px-3 text-sm font-medium text-gray0 rounded-sm border-[1px] border-gray800`}
              >
                {tag}
              </RouterLink>
            ))}
          </div>
        </div>
      </section>

      {/* Footer-bottom */}
      <section className="w-full flex items-center justify-center py-6 shadow-boxShadow border-t-[1px] border-gray800">
        <p className="text-gray300 text-xs sm:text-sm font-normal text-center ">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </p>
      </section>
    </main>
  );
}

export default Footer;
