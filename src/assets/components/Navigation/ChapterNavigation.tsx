import "./ChapterNavigation.css";

interface Props {
  previous?: string;
  next?: string;
}

export default function ChapterNavigation({ previous, next }: Props) {
  return (
    <div className="chapter-nav">
      {previous && <a href={previous}>⬅️ Chapitre précédent</a>}
      <a href="#top">⬆️ Sommaire</a>
      {next && <a href={next}>➡️ Chapitre suivant</a>}
    </div>
  );
}
