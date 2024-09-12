import Header from "../components/Header";
import Task from "../components/Task";

function Home() {
  return (
    <div className="p-[16px] bg-[#F6F6F7] w-screen min-h-screen">
      <Header />

      <Task />
    </div>
  );
}

export default Home;
