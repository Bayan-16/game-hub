import { Button } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import usePlatform from "@/hooks/usePlatform";
import { Platform } from "@/hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="subtle" m="0  0 10px 0">
            {selectedPlatform?.name || "Platform"}
          </Button>
        </MenuTrigger>

        <MenuContent>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              value=""
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default PlatformSelector;
