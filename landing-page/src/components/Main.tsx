function Main() {
  return (
    <div>
      <section className="slogan w-2/5 mx-auto text-center">
        <h1 className="text-4xl font-semibold my-2 w-3/5 mx-auto ">
          Work at the speed of thought
        </h1>
        <p className="w-3/5 mx-auto">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
        <div className="buttons flex gap-4 justify-center mt-16">
          <button className="h-[45px] w-[120px] text-xs whitespace-nowrap text-center bg-blue-700">
            Try For Free
          </button>
          <button className="border border-white h-[45px] w-[120px] text-xs whitespace-nowrap text-center">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Main;
