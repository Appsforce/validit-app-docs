import {
  ClipboardDocumentIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import cx from "classnames";
interface Props {
  copy?: boolean;
  copyText?: string;
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({
  copy = true,
  copyText,
  children,
  className,
}: Props) => {
  return (
    <code
      className={cx(
        "bg-gray-800 text-white rounded-md p-1 inline-flex",
        className
      )}
    >
      <div>{children}</div>
      {copy && (
        <button
          className="ml-auto"
          onClick={() => {
            navigator.clipboard.writeText(copyText || "");
          }}
        >
          <ClipboardIcon className="w-5 text-white" />
        </button>
      )}
    </code>
  );
};
