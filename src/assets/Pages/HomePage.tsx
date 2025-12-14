import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import type { Character } from "../data/charactereCard";
import { characters } from "../data/charactereCard";
import "./HomePage.css";
import { characterlore } from "../data/characterLore";
import ReactMarkdown from "react-markdown";
import ScrollToTopButton from "../components/Navigation/ScrollToTopButton";

const HomePage = () => {
  // Création des paires de personnages
  const characterPairs = characters
    .slice(0, characters.length / 2)
    .map((char, i) => ({
      front: char,
      back: characters[i + characters.length / 2],
    }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(characterPairs.length).fill(false)
  );

  const angleStep = 360 / characterPairs.length;

  const rotateLeft = () => setActiveIndex((prev) => prev - 1);
  const rotateRight = () => setActiveIndex((prev) => prev + 1);

  const normalizedIndex =
    ((activeIndex % characterPairs.length) + characterPairs.length) %
    characterPairs.length;

  const toggleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  const activeCharacter = flippedStates[normalizedIndex]
    ? characterPairs[normalizedIndex].back
    : characterPairs[normalizedIndex].front;

  useEffect(() => {
    document.body.style.backgroundImage = `url(${activeCharacter.Background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
    };
  }, [activeCharacter]);

  return (
    <div className="carousel-background">
      <div className="carousel-wrapper">
        <button
          type="button"
          onClick={rotateLeft}
          className="carousel-button left"
        >
          ←
        </button>

        <div className="container">
          <div
            className="carousel"
            style={{ transform: `rotateY(${-activeIndex * angleStep}deg)` }}
          >
            {characterPairs.map((pair, i) => {
              const angle = i * angleStep;
              const scale = i === normalizedIndex ? 1 : 0.5;

              return (
                <div
                  key={`${pair.front.id}-${pair.back.id}`}
                  className="carousel__face"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(250px) translateX(-6%) scale(${scale})`,
                    transition: "transform 0.5s ease",
                  }}
                >
                  <CharacterCard
                    front={pair.front}
                    back={pair.back}
                    isFlipped={flippedStates[i]}
                    onFlip={() => toggleFlip(i)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={rotateRight}
          className="carousel-button right"
        >
          →
        </button>
      </div>

      <div className="character-lore">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="markdown-title" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="markdown-subtitle" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="markdown-paragraph" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="markdown-list" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="markdown-list-item" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="markdown-underline" {...props} />
            ),
          }}
        >
          {characterlore[activeCharacter.id]}
        </ReactMarkdown>

        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default HomePage;
