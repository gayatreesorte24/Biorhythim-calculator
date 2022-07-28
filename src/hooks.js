import { useState } from "react";

export function useLocalStorage(key,defaultValue){
    const getinitialValue=()=> localStorage.getItem(key) ?? defaultValue;
    const [value,setValue]=useState(getinitialValue);
    const setAndStoreValue=(newValue)=>{
        setValue(newValue);
        localStorage.setItem(key,newValue);
    }
    return [value,setAndStoreValue];
}