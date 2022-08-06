import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";
import HomePage from "../../src/component/organism/HomePage";
import { Produts } from "../../src/interfaces/products";
import { db } from "../../firebase/firebaseConfig";

interface Props {
  products: Produts[];
}

const ProductPage: NextPage<Props> = ({ products }) => {
  console.log(products);

  return (
      <HomePage products={products} />
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
 
  const products = await getProducts();
  const product = products.find(
    (item) => item.ID === ctx.params!.id
  );
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {

    const products = await getProducts();

    return {
      paths:products
        .map((products) => ({ params: { id: `${products.ID}` } })),
      fallback: false,
    };
  };

export default ProductPage;

const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let arr: Produts[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      arr.push(doc.data() as Produts);
    });
    return arr;
  };
