import Link from "next/link";
import React from "react";

export const LeaderboardItem = ({
  content,
  path,
  title,
}: {
  content: string;
  path: string;
  title: string;
}) => {
  return (
    <Link href={path}>
      <h2>{title}</h2>
      <p>{content}</p>
    </Link>
  );
};

export default LeaderboardItem;
