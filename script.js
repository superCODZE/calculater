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

function DeleteLastCharacter(){
    result.value = result.value.slice(0, result.value.length - 1);
}