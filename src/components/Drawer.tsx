import React from "react";
import Collapse from "./Collapse";
import {
  ArrowLeftOnRectangleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useHelpModal } from "./HelpModal";

const NAV_ITEMS = [
  {
    name: "Pre-requisites",
    href: "#prerequisites",
  },
  {
    name: "Installation",
    href: "#installation",
    items: [
      {
        name: "iOS",
        href: "#installation-ios",
      },
      {
        name: "Android",
        href: "#installation-android",
      },
    ],
  },

  {
    name: "Installing dependencies",
    href: "#installing-dependencies",
  },
  {
    name: "Upgrading binah",
    href: "#upgrading-binah",
  },
  {
    name: "Deployment ( Stage )",
    href: "#deployment-stage",
    items: [
      {
        name: "iOS",
        href: "#deployment-stage-ios",
      },
      {
        name: "Android",
        href: "#deployment-stage-android",
      },
    ],
  },
  {
    name: "Deployment ( Prod )",
    href: "#deployment-prod",
    items: [
      {
        name: "iOS",
        href: "#deployment-prod-ios",
      },
      {
        name: "Android",
        href: "#deployment-prod-android",
      },
    ],
  },
  {
    name: "Troubleshooting",
    href: "#troubleshooting",
    items: [
      {
        name: "iOS",
        href: "#troubleshooting-ios",
      },
      {
        name: "Android",
        href: "#troubleshooting-android",
      },
    ],
  },
];

export default function Drawer() {
  const { open } = useHelpModal();
  return (
    <div className="fixed left-0 h-screen bg-slate-100 w-52 p-2 flex flex-col">
      <h1 className="font-bold text-xl flex-0">Validit app docs</h1>
      <ul className="flex flex-col gap-2 mt-2 flex-1">
        {NAV_ITEMS.map((item) => {
          return (
            <li>
              {item.items ? (
                <Collapse title={item.name} className="p-1">
                  <ul className="flex flex-col gap-2 mt-1">
                    {item.items.map((subItem) => (
                      <li>
                        <a
                          className="w-11/12 ml-1 items-start flex p-1 rounded-lg hover:bg-slate-300"
                          href={subItem.href}
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              ) : (
                <a
                  href={item.href}
                  className="w-full items-start flex p-1 rounded-lg hover:bg-slate-300"
                >
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <button
        onClick={open}
        className="self start flex items-center justify-between w-full px-2 hover:bg-slate-300 rounded-lg py-1 mb-1"
      >
        Help
        <QuestionMarkCircleIcon className="w-6" />
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("isAuth");
          window.location.reload();
        }}
        className="self-start flex items-center justify-between w-full px-2 hover:bg-slate-300 rounded-lg py-1"
      >
        Log out
        <ArrowLeftOnRectangleIcon className="w-6" />
      </button>
    </div>
  );
}
