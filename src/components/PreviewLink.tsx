import React from "react";
import { usePreviewModal } from "./PreviewModal";

interface Props {
  children: React.ReactNode;
  imageUrl: string;
}
export default function PreviewLink({ children, imageUrl }: Props) {
  const { open } = usePreviewModal();
  return (
    <button className="underline" onClick={() => open(imageUrl)}>
      {children}
    </button>
  );
}
