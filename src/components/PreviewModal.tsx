import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { create } from "zustand";
import cx from "classnames";

type Props = {};

interface PreviewModalState {
  isOpen: boolean;
  imageUrl: string | null;
  open: (imageUrl: string) => void;
  close: () => void;
}

export const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  open: (imageUrl: string) =>
    set((state) => ({ isOpen: !state.isOpen, imageUrl })),
  close: () => {
    set({ isOpen: false });
    setTimeout(() => {
      set({ imageUrl: null });
    }, 300);
  },
  imageUrl: null,
}));

export default function PreviewModal({}: Props) {
  const { imageUrl, isOpen, close } = usePreviewModal();

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
          "w-auto h-5/6  bg-white rounded-lg flex flex-col p-2 transition-opacity z-20",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        <button className="self-end" onClick={close}>
          <XCircleIcon className="w-6" />
        </button>
        {imageUrl && (
          <img
            src={imageUrl}
            className="w-full h-[96%] object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
}
