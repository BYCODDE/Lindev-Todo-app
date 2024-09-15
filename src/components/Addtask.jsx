import { createPost } from "../services/apitaddtask";
import { useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { TaskContext } from "../App";
function Addtask() {
  const { description, setDescription } = useContext(TaskContext);

  const { user } = useUser();

  return (
    <>
      <input
        type="text"
        className="placeholder:font-[600] placeholder:leading-6 placeholder:text-[#252931] placeholder:text-[16px] mt-[32px] px-[14px] py-[10px] rounded-lg bg-white shadow-md w-full outline-none"
        placeholder="Add task"
        name="task"
        style={{
          backgroundImage: "url('./add_icon.svg')",
          backgroundSize: "32px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          paddingLeft: "40px",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setDescription(e.target.value);
            createPost(description, user.id);
            e.target.value = "";
          }
        }}
      />
    </>
  );
}

export default Addtask;
