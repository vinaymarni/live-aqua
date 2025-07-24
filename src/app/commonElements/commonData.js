export const isNull = (object, value) => {
    if(object[value] == undefined || 
        object[value] == null || 
        object[value] == "" || 
        object[value] == '' ||
        object[value].length == undefined ||
        object[value].length < 1
    ){
        return false;             
    }else{
        return true;
    }
};

export const isValueNull = (element) => {
    if( element == undefined || 
        element == null || 
        element.value == "" ||
        element.value == ''
    ){
        return false;             
    }else{
        return true;
    }
};


export const setValueFromId =(dropdownArray, value) => {
    let name = "";
    dropdownArray.map(each=>{
        if(each.constId != undefined && each.constId == value){
            name = each.constName;
        }else if(each.id != undefined && each.id == value){
            name = each.id;
        }else if(each != undefined && each == value){
            name = each;
        }
    })
    return name;
};
