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
    return percent*100;
}

var rows = document.getElementsByClassName('td-poll-result');
for(var i = 0; i < rows.length; i++) {
    var point = percent(getLocal('mngl' + (i + 1)), getLocal('mem' +  + (i + 1)));
    var name = rows[i].getElementsByTagName('p')[0].innerHTML;
    result.push({name, point});
}

console.log(result);
// console.log(result);

// let data = [];
// $(".none-tag-mobile tbody tr").each((key, value) => {
//     let objName = $(value).find('td')[1];
//     let name = $(objName).find('p').text();
//     let objPoint = $(value).find('td')[2];
//     let point = $(objPoint).find('span').text();

//     data.push({name, point});

// })

// result = result.sort(function(a, b) {return b - a;});

// var rows = document.getElementsByClassName('td-poll-result');
for(var i = 0; i < rows.length; i++) {
    for(var j = i+1; j <= i; j ++) {
        var percentOfSpeaker = document.createElement('span');
        percentOfSpeaker.innerHTML = '-_- VOTED: ' + result[j].point + '%' ;
        if (rows[i].getElementsByTagName('p')[0].innerHTML == result[j].name) {
            console.log(result[i].point);
            rows[i].append(percentOfSpeaker);
        }
        // var name = rows[i].getElementsByTagName('p')[0].innerHTML;
        // console.log(name);
    }
}

console.log('longNB: ', percent(getLocal('mngl1'), getLocal('mem1')));
console.log('ducPV: ', percent(getLocal('mngl2'), getLocal('mem2')));
console.log('tuanNDA: ', percent(getLocal('mngl3'), getLocal('mem3')));
console.log('cuongPH: ', percent(getLocal('mngl4'), getLocal('mem4')));
console.log('maiVT: ', percent(getLocal('mngl5'), getLocal('mem5')));
