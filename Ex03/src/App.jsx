import { useState, useMemo } from "react";

function App() {
  // mock 5000 products
  const products = Array.from({ length: 5000 }, (_, i) => ({
    id: i,
    name: "Product " + i,
    price: Math.floor(Math.random() * 1000)
  }));

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  console.time("filter");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= minPrice &&
        p.price <= maxPrice
    );
  }, [search, minPrice, maxPrice]);

  console.timeEnd("filter");

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <h2>Product Filter</h2>

      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min price"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Max price"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      <h3>Total: {totalPrice}</h3>

      {filteredProducts.slice(0, 20).map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}
    </div>
  );
}

export default App;