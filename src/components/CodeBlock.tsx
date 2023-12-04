import { ClipboardIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import React from "react";
interface Props {
  copyText?: string;
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ copyText, children, className }: Props) => {
  return (
    <code
      className={cx(
        "bg-gray-100 text-black rounded-md p-1 inline-flex w-fit",
        className
      )}
    >
      <div>{children}</div>
      {copyText && (
        <button
          className="ml-auto"
          onClick={() => {
            navigator.clipboard.writeText(copyText || "");
          }}
        >
          <ClipboardIcon className="w-5 ms-2" />
        </button>
      )}
    </code>
  );
};
