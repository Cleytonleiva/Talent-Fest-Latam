import { createContext, useEffect, useState } from "react";
import axios from "axios";


function createProductContext() {
  const [product, setProduct] = useState({});

  const productsData = async () => {
    const productOne =
      "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox1.json";
    const productTwo =
      "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox2.json";
    const productThree =
      "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/data-buybox3.json";
    const positions = [productOne, productTwo, productThree];
    const randomPosition = Math.floor(Math.random() * (2 + 1));
    const data = await axios.get(positions[randomPosition]);

    // console.log(data)
    setProduct(data);
  };

  useEffect(() => {
    productsData();
  }, []);
  return { product, setProduct, productsData };
}

const ProductContext = createContext(createProductContext());//Le damos un valor inicial a contexto eb este caso es el objeto que devuelve la funcion createProductContext

export default ProductContext;
