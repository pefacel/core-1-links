import Link from "next/link";
import React from "react";
import { classNames } from "../../../lib/helper";

export default function NavbarLevel3Link({ currentPath, href }) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          "/" === currentPath
            ? "border-indigo-500  text-gray-900"
            : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium "
        )}
      >
        Dashboard
      </a>
    </Link>
  );
}
