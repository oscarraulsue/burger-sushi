import { FC } from "react";
import { useRouter } from "next/router";

import { Grid, Card, Row, Text, Col, Button } from "@nextui-org/react";

import { Produts } from "../../interfaces/products";

interface Props {
  product: Produts;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${product.ID}`);
  };

  return (
    <Grid xs={12} sm={4} md={3} xl={2} key={product.ID}>
      <Card css={{ w: "100%", h: "70vw" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            {/* <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              {product.Categoria}
            </Text> */}
            <Text
              h3
              color="#ffbc0d"
              style={{
                textShadow:
                  "3px 0 black, -3px 0 black, 0 3px black, 0 -3px black, 2px 2px black, -2px -2px black, 2px -2px black, -2px 2px black, #fff 0px 0px 10px ",
                fontWeight: "bold",
              }}
            >
              {product.Nombre}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={product.Imagenes[0]?.response}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={product.Nombre}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            // bgBlur: "#eb001466",

            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                {/* <Col span={3}>
                  <Card.Image
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                    css={{ bg: "black", br: "50%" }}
                    height={40}
                    width={40}
                    alt="Breathing app icon"
                  />
                </Col> */}
                <Col>
                  <Text
                    color="white"
                    size={15}
                    css={{
                      fontWeight: "bolder",
                      textShadow: "2px 1px 4px black",
                    }}
                  >
                    $ {product.Precio}
                  </Text>
                  {/* <Text color="#d1d1d1" size={12}>
                    Get a good nights sleep.
                  </Text> */}
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{
                    bg: "#ffbc0d",
                    height: 25,
                    boxShadow: "1px 0.5px 7px 1px rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <Text
                    css={{
                      color: "white",
                      textShadow: "2px 1px black, 2px 2px 4px black",
                      letterSpacing: 0.5,
                    }}
                    size={11}
                    weight="bold"
                  >
                    Agregar al carrito
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
