
document.getElementById('popup_checkbox').onchange = function disable_select() {
	document.getElementById('popup_week').disabled = document.getElementById('popup_checkbox').checked;
}

const fPollUrl = 'http://poll.framgia.vn';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

document.getElementById('popup_submit').onclick = function getTime() {
    var popup_month = document.getElementById('popup_month').value;
    var popup_week = !document.getElementById('popup_week').disabled 
    	? document.getElementById('popup_week').value
    	: '';

    var date = new Date(popup_month);
	urlPathNameMngl = '/link/' + monthNames[date.getMonth()] + popup_week + 'mngl';
	urlPathNameMem = '/link/' + monthNames[date.getMonth()] + popup_week + 'mem';
	chrome.storage.local.set({urlPathNameMngl});
	chrome.storage.local.set({urlPathNameMem});

	// Open two tabs of this poll after click button in popup
	window.open(fPollUrl + urlPathNameMem).focus();
	if (window.location.href == fPollUrl + urlPathNameMem) {
		console.log(1);
		window.open(fPollUrl + urlPathNameMngl);
	}
}
