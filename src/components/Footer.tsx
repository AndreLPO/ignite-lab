import { RocketSeatLogo } from "./RocketSeatLogo";

export function Footer() {
  return (
    <footer className="w-full p-6 flex bg-gray-700 border-t border-gray-600 gap-6 items-center">
      <RocketSeatLogo />
      <p className="flex-1">Rocketseat - Todos os direitos reservados</p>
      <p>Políticas de privacidade</p>
    </footer>
  );
}
