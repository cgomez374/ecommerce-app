export default async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Error occured fetching products.");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    alert(e.message);
  }
}
