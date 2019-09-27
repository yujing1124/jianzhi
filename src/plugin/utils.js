function wagesType(i) {
	if(i == '0') {
		return '元/小时'
	} else if(i == '1') {
		return '元/天'
	} else if(i == '2') {
		return '元/周'
	} else if(i == '3') {
		return '元/月'
	} else if(i == '4') {
		return '元/次'
	}
}

function payType(i) {
	if(i == '5') {
		return '完工结'
	} else if(i == '1') {
		return '日结'
	} else if(i == '2') {
		return '次日结'
	} else if(i == '3') {
		return '周结'
	} else if(i == '4') {
		return '月结'
	}
}

function formatDate(now) {
	var time = new Date(now)
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var date = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	return month + "月" + date + "日";
}