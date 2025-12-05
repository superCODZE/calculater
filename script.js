let result = document.querySelector('#display');

function EnterValue(arg){
    result.value += arg;
}

function ClearAll(){
    result.value = '';
}

function DisplayResult(){
    result.value = eval(result.value);
}