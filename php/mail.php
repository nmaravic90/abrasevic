<?php

if(isset($_POST['name']) || isset($_POST['bornYear']) || isset($_POST['mobile']) ||  isset($_POST['email']) || isset($_POST['experience']) || isset($_POST['section'])) {
    $name = $_POST['name'];
    $bornYear = $_POST['bornYear'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $experience = $_POST['experience'];
    $section = $_POST['section'];



    $to = 'nidza.nbg@gmail.com';
    $subject = "UPIS - " . $name;
    $email = "Ime i prezime: " . $name . "\r\n" .
    "Datum rodjenja: " . $bornYear . "\r\n" .
    "Telefon: " . $mobile . "\r\n" .
    "Email: " . $email . "\r\n" .
    "Prethodno iskustvo: " . $experience . "\r\n" .
    "Skcija: " . $section . "\r\n";
	$headers = 'From: nidza.nbg@gmail.com' . "\r\n" .
    'Reply-To: nidza.nbg@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();




    mail($to, $subject, $email, $headers);
}

?>