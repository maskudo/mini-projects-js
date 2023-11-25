import { dashboardImg } from "../constants";

function Dashboard() {
  return (
    <section className="dashboard relative | flex justify-center my-32">
      <div className="absolute w-full h-full"></div>
      <img src={dashboardImg} className="max-w-[80%]" />
    </section>
  );
}

export default Dashboard;
