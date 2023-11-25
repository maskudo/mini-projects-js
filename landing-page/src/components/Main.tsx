import Dashboard from "./Dashboard";
function Main() {
  return (
    <div>
      <section className="slogan md:w-2/5 mx-auto text-center">
        <h1 className="text-5xl font-semibold my-8 md:w-4/5 mx-auto w-full">
          Work at the speed of thought.
        </h1>
        <p className="md:w-4/5  w-full mx-auto px-8 text-sm">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div className="buttons flex md:flex-row flex-col gap-4 items-center justify-center mt-16">
          <button className="h-[45px] w-[120px] text-xs whitespace-nowrap text-center bg-blue-700">
            Try For Free
          </button>
          <button className="border border-white h-[45px] w-[120px] text-xs whitespace-nowrap text-center">
            Learn More
          </button>
        </div>
      </section>
      <Dashboard />
    </div>
  );
}

export default Main;
