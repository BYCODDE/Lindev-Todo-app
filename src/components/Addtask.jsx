// import { TaskContext } from "../App";
import { useState } from "react";
import { createPost } from "../services/apitaddtask";
function Addtask() {
  // const { addTask } = useContext(TaskContext);
  const [description, setDescription] = useState("");
  console.log(description);

  return (
    <>
      <input
        type="text"
        className="placeholder:font-[600] placeholder:leading-6 placeholder:text-[#252931] placeholder:text-[16px] mt-[32px] px-[14px] py-[10px] rounded-lg bg-white shadow-md"
        placeholder="Add task"
        name="task"
        style={{
          backgroundImage: "url('./add_icon.svg')",
          backgroundSize: "24px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          paddingLeft: "40px",
        }}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        onMouseEnter={() => createPost(description)}
      />
    </>
  );
}

export default Addtask;
