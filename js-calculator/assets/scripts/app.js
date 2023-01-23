// alert('This Works !!!');
const defaultResult=0
let currentResult=defaultResult;
let logEntries=[];
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber)
{
    const calcDiscription=`${resultBeforeCalc} ${operator} ${calcNumber}` 
    outputResult(currentResult,calcDiscription) 
}

function WriteToLog(
    operationIdentifire,
    prevResult,
    operationNumber,
    newResult
    ){
    const logEntry={
        operation:operationIdentifire,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries)
}

function add()
{
    const enteredNumber=parseInt(userInput.value)
    const initialResult=currentResult;
    // currentResult=currentResult+enteredNumber;
    currentResult+=enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber)
    // logEntries=[enteredNumber]
   /* const logEntry={
        operation:"ADD",
        prevResult:initialResult,
        number:enteredNumber,
        result:currentResult
    };
    console.log(logEntry.operation)*/
    WriteToLog('ADD',initialResult, enteredNumber ,currentResult)    
    

    // logEntries.push(enteredNumber)
    // console.log(logEntries)

    // alert('The result is  '+result);
    // return result;
}
addBtn.addEventListener('click',add)

function subtract()
{
    const enteredNumber=parseInt(userInput.value)
    const initialResult=currentResult
    currentResult=currentResult-enteredNumber
    createAndWriteOutput('-',initialResult,enteredNumber)
    WriteToLog('SUBTRACT',initialResult, enteredNumber ,currentResult)    
}
subtractBtn.addEventListener('click',subtract)


function multiply()
{
    const enteredNumber=parseInt(userInput.value)
    const initialResult=currentResult
    currentResult=currentResult*enteredNumber
    createAndWriteOutput('*',initialResult,enteredNumber)
    WriteToLog('MULTIPLY',initialResult, enteredNumber ,currentResult)    
}
multiplyBtn.addEventListener('click',multiply)

function divide()
{
    const enteredNumber=parseInt(userInput.value)
    const initialResult=currentResult
    currentResult=currentResult/enteredNumber
    createAndWriteOutput('/',initialResult,enteredNumber)
    WriteToLog('DIVIDE',initialResult, enteredNumber ,currentResult)    
}
divideBtn.addEventListener('click',divide)
// currentResult= add(45,45);

// add(70,70)
// currentResult=additionResult;
// let calculationDiscription='(' + currentResult +' + 10) *3 /2 -1';
// let calculationDiscription=`(${defaultResult} + 10) *3 / 2 - 1`

// let errorMessage='An error \n'+
//                 'Occured !!'

function modolo()
{
    const enteredNumber=parseInt(userInput.value)
    const initialResult=currentResult
    currentResult=currentResult%enteredNumber
    createAndWriteOutput('%',initialResult,enteredNumber)
    WriteToLog('MODOLO',initialResult, enteredNumber ,currentResult)    
}
modoloBtn.addEventListener('click',modolo)

