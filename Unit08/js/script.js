function bai1() {
	var count = 0;
	for (var i = 0; i < 100; i++) {
		if ((i + 1) % 3 == 0 || (i + 1) % 7 == 0) {
			count++;
		}
	}
	document.write("Tong so luong: " + count + "<br>");
}

function bai2(n){
	var sum = 0, i = 0;
	if (n < 0) {
		document.write("So bi am");
	}else{
		do{
			sum += i;
			i++;
		}while(i <= n);
		document.write("Tong: " + sum + "<br>");
	}	
}

function bai3(n) {
	var sum = 0, mau = 1;
	if(n == 0){
		document.write("So 0 khong hop le");
	} else{
		for (var i = 0; i < n; i++) {
			var j = 1;
			while (j <= i) {
				mau *= j;
				j++;
			}
			sum = sum + (i + 1) / mau;
		}
		document.write("Tong: " + sum + "<br>");
	}	
}

function bai4(m, n, k){
	var sum = 0;
	if(m < n){
		document.write("Day khong hop le m < n");
	} else{
		for (var i = n; i <= m; i++) {
			if (i % k == 0) {
				sum += i;
			}
		}
		document.write("Tong " + sum);
	}
}

function bai5(n){
	var sum = 0;
	if (n == 0) {
		document.write("So 0 khong hop le");
	}else{
		for (var i = 0; i < n; i++) {
			sum += 1/(i + 1);
		}
		document.write(sum + "<br>");
	}
}

function bai6(n){
	var sum = 0, count = 1;
	if(n % 2 == 1) {
		n += 1;
	}
	sum = (2 * n + 18) * 2;
	document.write(sum +"<br>");
}

function bai7(){
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < i + 1; j++) {
			document.write("*");
		}
		document.write("<br>");
	}
	document.write("<br>");

	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 7; j++) {
			document.write("*");
		}
		document.write("<br>");
	}
	document.write("<br>");

	for (var i = 0; i < 7; i++) {
		if(i == 0 || i == 6){
			for (var j = 0; j < 7; j++) {
				document.write("*");
			}
			document.write("<br>");
		}else{
			for (var j = 0; j < 7; j++) {
				if(j == 0 || j == 6){
					document.write("*");
				}else{
					document.write("&nbsp ");
				}
			}
			document.write("<br>");
		}
	}
	document.write("<br>");

	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 7 - i; j++) {
			document.write("*");
		}
		document.write("<br>");
	}
	document.write("<br>");
}
