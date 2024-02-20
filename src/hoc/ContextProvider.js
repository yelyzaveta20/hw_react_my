// import {createContext, useState} from "react";
//
// const Context = createContext(null);
// const ContextProvider = ({children}) => {
//     const [trigger, setTrigger] = useState(null)
//     const changeTrigger = () => {
//         setTrigger(prev => !prev)
//     }
//     return (
//         <Context.Provider value={{trigger, changeTrigger}}>
//             {children}
//         </Context.Provider>
//     );
// };
//
// export {
//     ContextProvider,
//     Context
// };

// import {createContext} from "react";
//
// const Context = createContext(null);
// const ContextProvider = ({children}) => {
//     return (
//         <div>
//             <Context.Provider value={{episode}}>
//                 {children}
//             </Context.Provider>
//         </div>
//     );
// };
//
// export {
//     ContextProvider,
//     Context
// };