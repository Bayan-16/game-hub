import { Button } from "@chakra-ui/react";
import { MenuTrigger, MenuContent, MenuItem, MenuRoot } from "./ui/menu";

interface Props {
  onSelectSotOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSotOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="subtle" m="0  0 10px 0">
            Order by: {currentSortOrder?.label || "Relevance"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSotOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default SortSelector;
