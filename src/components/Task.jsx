import { useContext } from "react";
import { TaskContext } from "../App";

function Task() {
  const { description } = useContext(TaskContext);
  console.log(description);

  return (
    <>
      {description ? (
        <div className="relative rounded-[10px] bg-[#E3EBFC] px-[16px] py-[12px] flex flex-col gap-[12px] mt-[52px] items-center h-[242px]">
          <div className="absolute top-[12px] left-[16px]">
            <img
              src="./calendar.svg"
              alt="calendar"
              className="cursor-pointer"
            />
          </div>

          <div className="mt-[32px]">{description}</div>

          <img
            src="./task_svg.svg"
            alt="add_icon"
            className="absolute bottom-[12px] right-[16px] cursor-pointer w-[24px] h-[24px]"
          />
        </div>
      ) : null}
    </>
  );
}

export default Task;
