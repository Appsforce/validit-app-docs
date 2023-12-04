import React from "react";
import cx from "classnames";
import { useCollapse } from "react-collapsed";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function Collapse({ children, title, className }: Props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className={className}>
      <button
        {...getToggleProps()}
        className="w-full flex justify-between items-center"
      >
        {title}
        <ChevronDownIcon
          className={cx(
            "w-5 transition-transform duration-200",
            isExpanded ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <div {...getCollapseProps()}>{children}</div>
    </div>
  );
}
