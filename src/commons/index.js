export const pushItemsToArray = (existingArray,newItems)=>{
    if(Array.isArray(newItems)){
       return [...existingArray,...newItems]
    }
    if(newItems){
       return [...existingArray,newItems] 
    }
}