export interface Produts {
    Nombre:       string;
    Categoria?:   string;
    Opciones:     Ingrediente[];
    Ingredientes: Ingrediente[];
    Tipo:         "menu" | "combos" | "promos";
    DescuentoMax: number | string;
    Descripcion:  string;
    Imagenes:     Imagene[];
    ID:           string;
    Precio:       string;
}

export interface Imagene {
    itemKey:  string;
    response: string;
}

export interface Ingrediente {
    img:  Imagene | string;
    name: string;
}

