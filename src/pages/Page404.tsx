import { Link } from "react-router-dom";
import page404 from "../assets/svg/Page404.png";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

function Page404() {
  const windowBackHandler = (): void => {
    window.history.back();
  };

  return (
    <main className="flex items-center justify-center pb-20 px-3">
      <section className="container mx-auto w-full flex flex-col items-center justify-center">
        <img src={page404} alt="Page not Found" className="max-w-[350px]" />

        <div className="flex flex-col items-center gap-6">
          <p className="text-gray900 text-[28px] sm:text-4xl font-semibold text-center">
            404, Page not founds
          </p>
          <p className="text-gray700 text-sm sm:text-base font-normal max-w-[530px] text-center">
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={windowBackHandler}
              className="flex items-center gap-2 border-2 border-primary100 rounded-sm px-4 sm:px-6 text-sm font-bold hover:text-primary500 hover:bg-transparent py-3 bg-primary500 text-primary100 duration-300"
            >
              <IoMdArrowRoundBack /> Go Back
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 border-2 border-primary100 rounded-sm px-4 sm:px-6 text-sm font-bold text-primary500 py-3 hover:bg-primary500 hover:text-primary100 duration-300"
            >
              <IoHomeOutline /> Go To home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page404;
