import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <>
      {" "}
      <Card.Root>
        <Skeleton width={{ lg: "300px" }} height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCardSkeleton;
