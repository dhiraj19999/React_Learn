
import { createContext, useContext } from 'react'

import { useState } from 'react'
export const Count = createContext()
export const Countcontext = ({children }) => {
	const [count, setCount] = useState(0)

	const Inc = () => {
		setCount(count + 1)
	}

	const Dec = () => {
		setCount(count - 1)

	}

	return <Count.Provider value={{Inc,Dec,count}}>{children}</Count.Provider>


}

export const useCount=()=>{

    return useContext(Count)
}

    