import { createContext } from "react";
import { OverviewContextType } from "../type/type";

const OverviewContext = createContext<null | OverviewContextType>(null);

export default OverviewContext;
