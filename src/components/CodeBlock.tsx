import {
  ClipboardDocumentIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  copy?: boolean;
  copyText?: string;
  children: React.ReactNode;
}

export const CodeBlock = ({ copy = true, copyText, children }: Props) => {
  return (
    <code className="bg-gray-800 text-white rounded-md p-1 inline-flex">
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
