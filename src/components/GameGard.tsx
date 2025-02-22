import { Game } from "@/hooks/useGames";
import { CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameGard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"} spaceX={5}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={20}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameGard;
