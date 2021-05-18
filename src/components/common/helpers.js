const campoRequerido = (value) =>{
    if(value.trim()===''){
        return false;
    }else{
        return true;
    }
}

export {campoRequerido};