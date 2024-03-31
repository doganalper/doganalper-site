export type InventoryItem = {
  link: string;
  name: string;
  description?: string;
};

export type InventoryGroup = {
  name: string;
  items: InventoryItem[];
};
