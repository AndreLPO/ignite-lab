import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const { slug } = useParams<{ slug: string }>();
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={classNames(
          "rounded border p-4 mt-2 group-hover:border-green-500 relative",
          {
            "overflow-visible bg-green-500 border-green-500 before:content-[' '] before:absolute before:w-4 before:h-4 before:bg-green-500 before:z-[100] before:rotate-45 before:left-0 before:top-[50%] before:translate-y-[-10px] before:translate-x-[-50%]":
              isActiveLesson,
            "border-gray-500": !isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm font-medium flex items-center gap-2",
                {
                  "text-blue-500": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border",
              {
                "border-green-300": !isActiveLesson,
                "border-white": isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
