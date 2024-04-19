let Result=document.querySelector(".result");
function Apendtoresult(value){
    Result.innerHTML +=value;
}
function cleardata(){
    Result.innerHTML='';
}
function calculaterasult(){
    try{
        Result.innerText=eval(Result.innerText);
    }catch(err){
        Result.innerText="Error";
    }
}