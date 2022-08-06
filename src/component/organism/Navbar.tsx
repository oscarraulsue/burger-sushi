import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import { BurgerMenu } from "./BurgerMenu";
import { Badge, Box } from "@mui/material";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        position: "fixed",
        zIndex: 100,
        padding: "5px 10px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src="/image/burgerSushi.png"
            alt="icono de la app"
            width={100}
            height={38}
            style={{ margin: "10px" }}
          />
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <Box sx={{color:'#ffbc0d'}}>
      <Badge color="error" badgeContent={2} sx={{color:'#ffbc0d', mr:2}}>
        <ShoppingCartSharpIcon sx={{color:'#ffbc0d', fontSize:25, mb: -1, mr:0.2}}/>
      </Badge>
      </Box>
      <BurgerMenu />
    </div>
  );
};
