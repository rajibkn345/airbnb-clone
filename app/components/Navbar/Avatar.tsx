"use clinet";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      width={30}
      height={30}
      src={"/images/placeholder.jpg"}
      alt="avatar"
    />
  );
};

export default Avatar;
