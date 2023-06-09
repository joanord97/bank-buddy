import Link from "next/link";
import React from "react";

type LongCardType = {
  id: string;
  title: string;
  subTitle: string;
  data: string;
  subData: string;
};

const LongCard = (props: LongCardType) => {
  return (
    <div className="w-full px-4 py-2">
      <Link
        href="/"
        className="card w-full bg-neutral text-neutral-content hover:bg-neutral-focus grid grid-cols-2"
      >
        <div className="card-body items-start text-center ">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.subTitle}</p>
        </div>
        <div className="card-body items-end text-center">
          <h3 className="card-title">{props.data}</h3>
          <p>{props.subData}</p>
        </div>
      </Link>
    </div>
  );
};

export default LongCard;
