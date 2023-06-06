import React from "react";

interface GameProps {
  playerName: string;
  onClick: () => void;
}

const Game = ({ playerName, onClick }: GameProps) => {
  return (
    <>
      <div>Name: {playerName}</div>
      <button onClick={onClick}>Change Name</button>
    </>
  );
};

export default Game;
