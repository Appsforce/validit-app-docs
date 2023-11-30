import React from "react";
import Collapse from "./Collapse";

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
  return (
    <div className="fixed left-0 h-screen bg-slate-100 w-52 p-2">
      <h1 className="font-bold text-xl">Validit app docs</h1>
      <ul className="flex flex-col gap-2 mt-2">
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
    </div>
  );
}
