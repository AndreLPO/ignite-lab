import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";

interface CardButtonProps {
  title: string;
  content: string;
  icon: ReactNode;
}

export function CardButton(props: CardButtonProps) {
  return (
    <a
      href=""
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center ">
        {props.icon}
      </div>
      <div className="py-6 leading-relaxed flex-1">
        <strong className="text-2xl">{props.title}</strong>
        <p className="text-sm text-gray-200 mt-2">{props.content}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
