import { useContext } from "react";
import { HerreriaContext } from "../context/provider";

export default function useHerreria() {
    const herreriaContext = useContext(HerreriaContext);
    
    return herreriaContext;
}
