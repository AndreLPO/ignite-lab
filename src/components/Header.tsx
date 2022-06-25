import { Link } from "react-router-dom";
import { EventLogo } from "./EventLogo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-900 border-b border-gray-600">
      <Link to="/">
        <EventLogo />
      </Link>
    </header>
  );
}
