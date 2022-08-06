import { createTheme } from "@nextui-org/react"

export const lightTheme = createTheme({
  type: 'light',

  theme: {
    colors: {
        background: 'rgb(248, 255, 181)',
        primary: '#eb0011',
        secondary:'#ffbc0d'
    }, // override dark theme colors 
 
  },

 
});