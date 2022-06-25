import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon: ReactNode;
  style: "primary" | "secondary";
}

export function Button(props: ButtonProps) {
  return (
    <a
      href=""
      className={classNames(
        "p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors",
        {
          "bg-green-500 hover:bg-green-700": props.style === "primary",
          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-700":
            props.style !== "primary",
        }
      )}
    >
      {/* <DiscordLogo size={24} /> */}
      {props.icon}
      {props.label}
    </a>
  );
}
