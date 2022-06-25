import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventLogo } from "../components/EventLogo";
import { useMyMutationMutation } from "../graphql/generated";

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [createSubscriber, { data, loading }] = useMyMutationMutation({
    variables: {
      name,
      email,
    },
    onCompleted: (data) => {
      console.log(data);
      navigate("/event");
    },
  });

  function handleSubscribe(event: FormEvent) {
    event?.preventDefault();
    createSubscriber();
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <EventLogo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma
            <span className="text-blue-500 font-semibold">
              aplicação completa
            </span>
            , do zero, com
            <span className="text-blue-500 font-semibold">React JS</span>
          </h1>
          <p className="mt-4 text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Carregando" : "Garantir minha vaga"}
            </button>
          </form>
        </div>
      </div>
      <img
        src="/src/assets/code-mockup.png"
        className="mt-10"
        alt="Imagens de código"
      />
    </div>
  );
}
