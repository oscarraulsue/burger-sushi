import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import MainLayout from '../templates/MainLayout';
import { Produts } from '../../interfaces/products';


interface Props {
  products: Produts[];
}

const HomePage: NextPage<Props> = ({ products }) => {

  return (
    <MainLayout title='Listado de Pokémons'>
      
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          products.map( ( product ) => (
            <ProductCard key={ product.ID } product={ product } />
          ))
        }
      </Grid.Container>

    </MainLayout>
  )
}

export default HomePage;
