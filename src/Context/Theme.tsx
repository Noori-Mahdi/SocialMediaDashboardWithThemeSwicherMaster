import { createContext} from "react";
import { ThemeContextType } from "../type/type";

const ThemeContext = createContext<null | ThemeContextType>(null);

export default ThemeContext;