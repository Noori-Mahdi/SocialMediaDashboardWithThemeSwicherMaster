import { createContext } from "react";
import { TotalSocialContextType } from "../type/type";

const TotalSocialContext = createContext<TotalSocialContextType | null>(null);

export default TotalSocialContext;
