import { Game } from "@/hooks/useGames";
import { CardBody, Heading, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}

const GameGard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={20}>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameGard;
