import { createContext,useState } from "react";

const itemContext = createContext();

function CustomItemConext({children}){
    const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
    // console.log(props);
    return (
        <itemContext.Provider value = {
            {
                total,setTotal,item,setItem
            }
        }>
            {children}
        </itemContext.Provider>
    )
}

export{itemContext};
export default CustomItemConext;