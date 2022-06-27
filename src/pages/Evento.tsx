import { useParams } from "react-router-dom";
import { CoffeeIcon } from "../components/CoffeeIcon";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Evento() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex flex-1 items-center justify-center ">
            <CoffeeIcon size={"500"} />
            <p className="text-2xl w-80">
              Prepare seu melhor café e escolha uma das nossas aulas a direita!
            </p>
          </div>
        )}
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
