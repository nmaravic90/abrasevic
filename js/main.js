$('#body').hide();
$(window).on('load', function () {
    setTimeout(removeLoader, 1000);
});
function removeLoader() {
    $(".spiner").fadeOut(400, function () {
        $(".spiner").remove();
        $('#body').fadeTo("slow", 1);
    });
}

$('#send').on('click', function (e) {
    e.preventDefault();
    var name = document.getElementsByName('name')[0].value;
    var bornYear = document.getElementsByName('born-year')[0].value;
    var mobile = document.getElementsByName('tel')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var experience = document.getElementsByName('experience')[0].value;
    var section = document.getElementsByName('section')[0];
    var dataMail = new FormData();
    var alertTitle;

    if (name == '' || bornYear == '' || tel == '' || email == '' || section.value == 'none') {
        alertTitle = "Сва поља морају бити попуњена!";
        errorMessage(alertTitle);
    }
    else if(!isYear(bornYear)){
        alertTitle = "Година рођења није правилно уписана!";
        errorMessage(alertTitle);
    }
    else if (!isEmail(email)) {
        alertTitle = "Е-пошта није валидна!";
        errorMessage(alertTitle);

    }
    else if (!isMobile(mobile)) {
        alertTitle = "Број телфона није правилно унешен!"
        errorMessage(alertTitle);

    }
    else {
        dataMail.append('name', name);
        dataMail.append('bornYear', bornYear);
        dataMail.append('mobile', mobile);
        dataMail.append('email', email);
        dataMail.append('experience', experience);
        dataMail.append('section', section.value);
        succesMessage();
        document.getElementById('form').reset();
        sendMail(dataMail);
    }
});

// Sweet alert 
succesMessage = () => {
    swal({
        title: "Поштована/и успешнo сте се пријавили!",
        text: "Велики поздрав КУД Абрашевић Београд",
        icon: "images/thumb.png",
        buttons: {
            confirm: "У реду",
        }
    });
}
errorMessage = (title) => {
    swal({
        title: title,
        icon: "warning",
        buttons: {
            confirm: "У реду",
        }
    });
}

// Validate
isEmail = (email) => {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
isMobile = (mobile) => {
    let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return regex.test(mobile);
}
isYear = (year) => {
    let curentYear = new Date().getFullYear();
    if(year.length != 4) return false;
    if(year > curentYear || year < 1900) return false;
    return true;
}

isNumber = (event) => {
	var charCode = (event.which) ? event.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
	return false;

	return true;
}

// Send mail
sendMail = (dataMail) => {
    $.ajax({
        type: 'POST',
        url: 'php/sendMail.php',
        data: dataMail,
        processData: false,
        contentType: false
    });
}