import { Button, MenuContent, MenuItem, MenuRoot } from "@chakra-ui/react";
import React from "react";
import { MenuTrigger } from "./ui/menu";

const SortSelector = () => {
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="subtle" m="0  0 10px 0">
            Order by: Relevance
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="">Relevance</MenuItem>
          <MenuItem value="">Date added</MenuItem>
          <MenuItem value="">Name</MenuItem>
          <MenuItem value="">Release data</MenuItem>
          <MenuItem value="">Popularity</MenuItem>
          <MenuItem value="">Average rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default SortSelector;
