import ItemList from "../components/ItemList";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center sm:items-start sm:flex-row 
    gap-20 mt-16 w-4/5 mx-auto max-w-[1500px]"
    >
      <section className="w-2/3">
        <h1 className="font-bold text-3xl mb-8">Desserts</h1>
        <ItemList></ItemList>
      </section>
      <Cart></Cart>
    </main>
  );
}
