const { createContext, useState } = require("react");

export const DataContext = createContext()

const DataProvider = ({children}) => {
    const [auth, setAuth] = useState('')


    return (
        <DataContext.Provider value={{
            auth,
            setAuth
        }}>

{children}
        </DataContext.Provider>
    )
}

export default DataProvider;