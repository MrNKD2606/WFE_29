$(document).ready(function () {
	$('li').eq(1).on('click', function () {
		$('#menu2').css({'display': 'block'});
	});

	$('li').eq(9).on('click', function () {
		$('#content').css({'display': 'block'});
		$('.form').css({'display': 'block'});
		$('li').eq(15).css({'background' : '#2184be', 'color': 'white'});
	});

	$('button').eq(1).on('click', function () {
		var name = $('input').eq(0);
		var pass1 = $('input').eq(1);
		var pass2 = $('input').eq(2);
		var a, b, c;
		if (name.val()=="") {
			$('span').eq(0).text("Nhap name");
		}else{
			$('span').eq(0).text("");
			a = true;
		}

		if (pass1.val()=="") {
			$('span').eq(1).text("Nhap password");
		}else{
			$('span').eq(1).text("");
			b = true;
		}

		if (pass2.val()=="") {
			$('span').eq(2).text("Nhap lai password");
		}else if(pass2.val()!=pass1.val()){
			$('span').eq(2).text("Password khong dung");
		}else{
			$('span').eq(2).text("");
			c = true;
		}
		if(a==true&b==true&c==true){
			$('.form').css({'display': 'none'});
			$('.profile').css({'display': 'block'});
			$('li').eq(15).css({'background' : '#9dc8e2', 'color': 'white'});
			$('li').eq(16).css({'background' : '#2184be', 'color': 'white'});
		}
	})

	$('button').eq(3).on('click', function () {
		var fName = $('input').eq(3);
		var lName = $('input').eq(4);
		var email = $('input').eq(5);
		var address = $('input').eq(6);
		var age = $('input').eq(7);

		var a, b, c, d, e;
		if (fName.val()=="") {
			$('span').eq(3).text("Nhap first name");
		}else{
			$('span').eq(3).text("");
			a = true;
		}

		if (lName.val()=="") {
			$('span').eq(4).text("Nhap last name");
		}else{
			$('span').eq(4).text("");
			b = true;
		}

		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (email.val()=="") {
			$('span').eq(5).text("Nhap email");
		}else if(!filter.test(email.val())){
			$('span').eq(5).text("Email khong hop le");
		}else{
			$('span').eq(5).text("");
			c = true;
		}

		if (address.val()=="") {
			$('span').eq(6).text("Nhap dia chi");
		}else{
			$('span').eq(6).text("");
			d = true;
		}

		if(age.val()==""){
			$('span').eq(7).text("Nhap tuoi");
		}else if(parseInt(age.val())<18){
			$('.form').css({'display': 'none'});
			$('.profile').css({'display': 'none'});
			$('.warning').css({'display': 'block'});
			$('li').eq(15).css({'background' : '#9dc8e2', 'color': 'white'});
			$('li').eq(16).css({'background' : '#9dc8e2', 'color': 'white'});
			$('li').eq(17).css({'background' : '#2184be', 'color': 'white'});
		}else{
			$('span').eq(7).text("");
			e = true;
		}

		if(a==true&b==true&c==true&d==true&e==true){
			$('.form').css({'display': 'none'});
			$('.profile').css({'display': 'none'});
			$('.finish').css({'display': 'block'});
			$('li').eq(15).css({'background' : '#9dc8e2', 'color': 'white'});
			$('li').eq(16).css({'background' : '#9dc8e2', 'color': 'white'});
			$('li').eq(17).css({'background' : '#9dc8e2', 'color': 'white'});
			$('li').eq(18).css({'background' : '#2184be', 'color': 'white'});
		}
	})
	$('button').eq(5).on('click', function () {
		$('.form').css({'display': 'none'});
		$('.profile').css({'display': 'none'});
		$('.warning').css({'display': 'none'});
		$('.finish').css({'display': 'block'});
		$('li').eq(17).css({'background' : '#9dc8e2', 'color': 'white'});
		$('li').eq(18).css({'background' : '#2184be', 'color': 'white'});
	})

	$('button').eq(7).on('click', function () {
		$('.form').css({'display': 'none'});
		$('.profile').css({'display': 'none'});
		$('.warning').css({'display': 'none'});
		$('.finish').css({'display': 'block'});
		$('li').eq(19).css({'background' : '#2184be', 'color': 'white'});
		alert("Gui thanh cong");	
	})
})
	