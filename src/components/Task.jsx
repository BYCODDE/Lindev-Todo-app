import { useContext } from "react";
import { TaskContext } from "../App";
import { format } from "date-fns";

function Task() {
  const { description } = useContext(TaskContext);
  console.log(description);
  const now = new Date();
  const formattedDate = format(now, "dd/MM/yyyy");

  return (
    <>
      {description ? (
        <div className="relative rounded-[10px] bg-[#E3EBFC] px-[16px] py-[12px] flex flex-col gap-[12px] mt-[52px] items-center h-[242px]">
          <div className="absolute top-[12px] left-[16px] flex px-[12px] py-[4px] justify-center items-center gap-[5px] rounded-[30px] bg-[#F1F5FE] ">
            <img src="./calendar.svg" alt="calendar" />
            <p>{formattedDate}</p>
          </div>

          <div className="mt-[52px]">{description}</div>

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
