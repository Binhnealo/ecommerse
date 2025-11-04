import { createContext, useState} from "react";


export const SteperContext = createContext();

export const SteperProvider = ({children}) =>{
    const [currentStep, setCurrentStep] = useState(1);
    const value ={
        currentStep,
        setCurrentStep
    }

    return(
        <SteperContext.Provider value={value}> 
        {children}
        </SteperContext.Provider>
    );
};