import useData from "../hooks/useAxios";
import ProductsSlice from "../components/ProductsSlice";

export default function AllProducts() {
  const { data, error, isLoading } = useData(
    `${import.meta.env.VITE_ENDPOINT_BASE}/productos`
  );

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="xl:container xl:mx-auto py-6">
      <h1 className="text-3xl font-bold py-3">Todos los productos</h1>
      <ProductsSlice data={data} />
    </div>
  );
}
