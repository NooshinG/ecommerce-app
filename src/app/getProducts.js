async function getProducts(){
    const res = await fetch("https://api.storerestapi.com/products");

    if (!res.ok) {
      throw new Error((e) => e.message);
    }  
    const data = await res.json();
  
    return data;
  }
  
  export default getProducts;