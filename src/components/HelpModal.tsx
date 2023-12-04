import React from "react";
import { create } from "zustand";
import cx from "classnames";
import { CodeBlock } from "./CodeBlock";
import { XCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

interface HelpModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useHelpModal = create<HelpModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default function HelpModal({}: Props) {
  const { isOpen, close } = useHelpModal();
  return (
    <div
      className={cx(
        " w-screen h-screen absolute inset-0 flex justify-center items-center",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        onClick={close}
        className={cx(
          "w-screen h-screen absolute inset-0 transition-colors z-10",
          isOpen
            ? "bg-[#00000080] pointer-events-auto"
            : "bg-[#00000000] pointer-events-none"
        )}
      />
      <div
        className={cx(
          "  bg-white rounded-lg flex flex-col p-2 transition-opacity z-20",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex w-full justify-between mb-4 items-center">
          <h4 className="font-bold text-2xl">Help</h4>
          <button onClick={close}>
            <XCircleIcon className="w-6" />
          </button>
        </div>

        <span className="underline">Image preview</span>
        <span className="underline text-link">Link</span>
        <span>
          <CodeBlock>Code Block</CodeBlock> ← Click to copy
        </span>
        <span className="text-xs text-gray-400 mt-4">
          To reopen this modal, click the Help button in the bottom left
        </span>
      </div>
    </div>
  );
}
