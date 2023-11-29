import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import cx from "classnames";

const ICON_CLASSES = "w-5 h-5 mr-2";

const VARIANTS = {
  info: {
    container: "bg-blue-100 text-blue-800",
    icon: <InformationCircleIcon className={ICON_CLASSES} />,
  },
  warning: {
    container: "bg-yellow-100 text-yellow-800",
    icon: <ExclamationTriangleIcon className={ICON_CLASSES} />,
  },
  danger: {
    container: "bg-red-100 text-red-800",
    icon: <ExclamationTriangleIcon className={ICON_CLASSES} />,
  },
  success: {
    container: "bg-green-100 text-green-800",
    icon: <CheckCircleIcon className={ICON_CLASSES} />,
  },
};

interface Props {
  variant: keyof typeof VARIANTS;
  children: React.ReactNode;
  className?: string;
}

export function InfoPanel({ variant = "info", children, className }: Props) {
  return (
    <div
      className={cx(
        "flex flex-row items-center px-2 py-1 rounded-md",
        VARIANTS[variant].container,
        className
      )}
    >
      {VARIANTS[variant].icon}
      {children}
    </div>
  );
}
