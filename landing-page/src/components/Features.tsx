import { chatbotImg, linechartImg, truth } from "../constants";
import { GiKnifeFork } from "react-icons/gi";

function Features() {
  return (
    <section>
      <div className="md:w-2/5 mx-auto text-center mb-16">
        <h3 className="uppercase text-4xl my-4">Features</h3>
        <p className="md:w-4/5  w-full mx-auto px-8 text-sm">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center mb-[80px] basis-2/3">
        <div className="relative | ">
          <img src={chatbotImg} alt="" />
          <img
            src={linechartImg}
            alt=""
            className="absolute bottom-[-80px] md:right-[-20px] right-auto md:scale-100 scale-75"
          />
        </div>
        <div className="md:basis-1/4 py-20 flex flex-col justify-around items-center md:gap-0 gap-12">
          {[1, 2, 3].map(() => (
            <div className="card  flex flex-col gap-4">
              <h4 className="flex items-start gap-2 text-sm">
                <GiKnifeFork className="text-green-300 text-lg" />
                A single source <br /> of truth
              </h4>
              <p className="text-xs">
                When you add work to your <br /> Slate calendar we automatically{" "}
                <br />
                calculate useful insights
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
