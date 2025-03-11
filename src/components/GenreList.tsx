import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32Px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
                variant="plain"
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
