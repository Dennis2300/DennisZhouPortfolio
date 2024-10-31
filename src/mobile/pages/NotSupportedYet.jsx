import React from "react";
import sad from "./../../assets/pics/sad.gif";

export default function NotSupportedYet() {
  return (
    <div class="flex items-center justify-center h-screen">
      <div class="text-center">
        <h2 class="text-2lg text-white">Phone support is under developement</h2>
        <p className="text-sm text-white mt-9">Please visit on a desktop pc or laptop</p>
        <img src={sad} alt="" />
      </div>
    </div>
  );
}
