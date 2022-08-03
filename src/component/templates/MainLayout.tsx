import { FC, ReactNode } from "react";
import Head from "next/head"

interface Props {
    title?: string;
    children: ReactNode;
  }
  
  
  const origin = (typeof window === 'undefined') ? '' : window.location.origin;
  
const MainLayout: FC<Props> = ({children}) => {
  return (
    <>
    <Head>
        <title>{ 'PokemonApp' }</title>
        <meta name="author" content="Fernando Herrera" />
        <meta name="description" content={`Información sobre el pokémon`} />
        <meta name="keywords" content={ ` pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre`} />
        <meta property="og:description" content={`Esta es la página sobre`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />

    </Head>
  
    {/* <Navbar /> */}

    <main style={{
      padding: '0px 20px'
    }}>
        { children }
    </main>
  
  </>
  )
}

export default MainLayout