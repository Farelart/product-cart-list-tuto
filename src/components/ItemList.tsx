import { menuItems } from "@/app/lib/data";
import Item from "./Item";

export default function ItemList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {menuItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
