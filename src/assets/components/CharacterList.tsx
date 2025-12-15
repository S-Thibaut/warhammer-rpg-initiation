import CharacterCard from "./CharacterCard";
import type { Character } from "../data/charactereCard";
import "./CharacterList.css";

type CharacterPair = {
  front: Character;
  back: Character;
};

type Props = {
  CharacterPairs: CharacterPair[];
};

const CharacterList = ({ CharacterPairs }: Props) => {
  return (
    <div className="Gallery">
      {CharacterPairs.map((pair) => (
        <CharacterCard
          key={pair.front.id}   // ✅ clé unique et stable
          front={pair.front}
          back={pair.back}
          isFlipped={false}
          onFlip={() => {}}
        />
      ))}
    </div>
  );
};

export default CharacterList;
