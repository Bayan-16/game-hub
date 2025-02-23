import { Game } from "@/hooks/useGames";
import { CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameGard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"} spaceX={5}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize={20}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameGard;
