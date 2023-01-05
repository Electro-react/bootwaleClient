import { createContext } from "react";
export const ShoesContext = createContext();
// function ContextProvider({ children }) {
//   const [sizes, setsizes] = useState({
//     4: false,
//     5: false,
//     6: false,
//     7: false,
//     8: false,
//     9: false,
//     10: false,
//     11: false,
//   });

//   return (
//     <ShoesContext.Provider value={{ sizes, setsizes }}>
//       {children}
//     </ShoesContext.Provider>
//   );
// }

// export default ContextProvider;
// export { ShoesContext };
