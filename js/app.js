// Local storage
function setLocal(name, value) {
    return localStorage.setItem(name, value);
}

function getLocal(name) {
    return localStorage.getItem(name);
}


var mngl = [];
var mem = [];
var result = [];
const urlPathNameMngl = '/link/Maymngl';
const urlPathNameMem = '/link/Maymem';

//Mngl
if (window.location.pathname == urlPathNameMngl) {
    var sumMngl = 0;
    for(var i = 0; i < 5; i++) {
        mngl[i] = parseInt(document.getElementById('id2' + (4439 + i)).innerHTML);
        sumMngl += mngl[i];
        setLocal('mngl' + (i + 1), mngl[i]);
    }
    setLocal('sumMngl', sumMngl);
}

//Mem
if (window.location.pathname == urlPathNameMem) {
    var sumMem = 0;
    for(var i = 0; i < 5; i++) {
        mem[i] = parseInt(document.getElementById('id2' + (4434 + i)).innerHTML);
        sumMem += mem[i];
        setLocal('mem' + (i + 1), mem[i]);
    }
    setLocal('sumMem', sumMem);
}

function percent(mnglPoint, memPoint) {
    var percent =  parseFloat(mnglPoint/getLocal('sumMngl')).toFixed(2)*0.3 + parseFloat(memPoint/getLocal('sumMem')).toFixed(2)*0.7;
    return percent*100 + '%';
}

console.log('longNB: ', percent(getLocal('mngl1'), getLocal('mem1')));
console.log('ducPV: ', percent(getLocal('mngl2'), getLocal('mem2')));
console.log('tuanNDA: ', percent(getLocal('mngl3'), getLocal('mem3')));
console.log('cuongPH: ', percent(getLocal('mngl4'), getLocal('mem4')));
console.log('maiVT: ', percent(getLocal('mngl5'), getLocal('mem5')));
