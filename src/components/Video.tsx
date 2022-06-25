import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import { Button } from "./Button";
import { CardButton } from "./CardButton";
import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  console.log(data);

  return loading ? (
    <strong className="flex-1">Carregando...</strong>
  ) : (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube
              videoId={data?.lesson!.videoId!}
              key={data?.lesson!.videoId!}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson!.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data?.lesson!.description}
            </p>

            {data?.lesson?.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={`https://github.com/${data.lesson.teacher.avatarURL}.png`}
                  alt="Foto Avatar"
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Button
              icon={<DiscordLogo size={24} />}
              label="Comunidade do Discord"
              style="primary"
            />
            <Button
              icon={<Lightning size={24} />}
              label="Acesse o desafio"
              style="secondary"
            />
          </div>
        </section>
        <section className="gap-8 mt-20 grid grid-cols-2">
          <CardButton
            icon={<FileArrowDown size={40} />}
            title="Material complementar"
            content="Acesse o material complementar para acelerar o seu
            desenvolvimento"
          />
          <CardButton
            icon={<Image size={40} />}
            title="Wallpapers Exclusivos"
            content="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </section>
      </div>
    </div>
  );
}
