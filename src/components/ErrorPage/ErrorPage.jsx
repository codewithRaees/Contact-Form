import { useRouteError } from "react-router-dom";
import banner from "/images/man.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div className="md:block form-right hidden px-2">
        <h1 className="font-semibold text-4xl text-sky-400">
          Oops! you Landed on Wrong Page.
        </h1>
        <img src={banner} alt="Banner" className="h-[410px]" />
      </div>
    </section>
  );
}
