import type { GetStaticProps, NextPage } from "next";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";

import { Produts } from "../src/interfaces/products";
import MainLayout from "../src/component/templates/MainLayout";
interface Props {
  products: Produts[];
}

const Home: NextPage<Props> = ({ products }) => {
  console.log(products);

  return (
    <MainLayout>
      <Home products={products} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let arr: Produts[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      arr.push(doc.data() as Produts);
    });
    return arr;
  };

  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};

export default Home;
