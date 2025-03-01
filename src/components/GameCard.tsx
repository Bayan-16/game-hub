import { Game } from "@/hooks/useGames";
import { CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      width="300px"
      borderRadius={10}
      overflow={"hidden"}
      spaceX={5}
      m="auto"
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
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

export default GameCard;
