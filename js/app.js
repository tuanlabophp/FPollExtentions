// Global functions
function setLocal(name, value) {
    return localStorage.setItem(name, value);
}

function getLocal(name) {
    return localStorage.getItem(name);
}

function percent(mnglPoint, memPoint) {
    var percent =  parseFloat(mnglPoint/getLocal('sumMngl')).toFixed(2)*0.3 + parseFloat(memPoint/getLocal('sumMem')).toFixed(2)*0.7;
    return percent*100 + '%';
}


// Global variables
var mngl = [];
var mem = [];
var result = [];
// chrome.storage.local.get(function(data) {
//   console.log(data);
// }); 
// var a;
// chrome.storage.local.get(function(s) {a = s.urlPathNameMem});

async function getChromeUrl() {
    await chrome.storage.sync.get(function(s) {this.urlMem = s.urlPathNameMem});
    console.log(this.urlMem);
    return this.urlMem;
}

getChromeUrl().then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
})

// function getChromeUrl(callback) {
//     chrome.storage.local.get('urlPathNameMem', callback);
// }

const fPollUrl = 'http://poll.framgia.vn';

if (window.location.href == (fPollUrl + urlPathNameMngl)) {
    window.open(fPollUrl + urlPathNameMngl);
}

var table = document.getElementsByClassName('table-hover')[0];
var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
var tdShowVotePercent = document.getElementsByClassName('td-poll-result');

function getData(url, ) {

}

//Mngl
if (window.location.pathname == urlPathNameMngl) {
    var sumMngl = 0;
    for(var i = 0; i < rows.length; i++) {
        var name = rows[i].getElementsByTagName('p')[0].innerHTML;
        var vote = parseInt(rows[i].getElementsByTagName('span')[0].innerHTML);
        mngl.push({name, vote});
        sumMngl += vote;
    }
    setLocal('mngl', JSON.stringify(mngl));
    setLocal('sumMngl', sumMngl);
}

// Mem
if (window.location.pathname == urlPathNameMem) {
    var sumMem = 0;
    for(var i = 0; i < rows.length; i++) {
        var name = rows[i].getElementsByTagName('p')[0].innerHTML;
        var vote = parseInt(rows[i].getElementsByTagName('span')[0].innerHTML);
        mem.push({name, vote});
        sumMem += vote;
    }
    setLocal('mem', JSON.stringify(mem));
    setLocal('sumMem', sumMem);
}

var localMngl = JSON.parse(getLocal('mngl'));
var localMem = JSON.parse(getLocal('mem'));
for(var i = 0; i < rows.length; i++) {
    for(var j = 0;j < rows.length; j++) {
        if (localMngl[i].name == localMem[j].name) {
            var name = localMngl[i]['name'];
            var votes = percent(localMngl[i].vote, localMem[j].vote);
        }
    }
    result.push({name, votes});
}


for(var i = 0; i < tdShowVotePercent.length; i++) {
    var nameInHTML = tdShowVotePercent[i].getElementsByTagName('p')[0].innerHTML;
    for(var j = 0; j < tdShowVotePercent.length; j++) {
        var spanAppend = document.createElement('span');
        if (nameInHTML == result[j].name) {
            spanAppend.innerHTML = "VOTED: " + result[j].votes;
            tdShowVotePercent[i].append(spanAppend);
        }
    }
}
