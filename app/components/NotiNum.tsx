import React from "react";

type Props = {};

const NotiNum = (props: Props) => {
  return (
    <div>
      <span
        className={` fadeIn transition-all text-[13px] absolute -top-[6px] -right-2 bg-primary rounded-full w-fit px-2 py-0  text-white/90`}
      >
        2
      </span>
    </div>
  );
};

export default NotiNum;
