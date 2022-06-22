<?php
if(isset($_POST['name']) && isset($_POST['bornYear']) && isset($_POST['mobile']) &&  isset($_POST['email']) && isset($_POST['experience']) && isset($_POST['section'])) {
    $name = $_POST['name'];
    $bornYear = $_POST['bornYear'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $experience = $_POST['experience'];
    $section = $_POST['section'];

    $to = "upis@abrasevicbeograd.rs";
    $subject = "[".$section."]" . " - ". $name;
    $message = "Ime i prezime: " . $name . "\r\n" .
    "Godina rodjenja: " . $bornYear . "\r\n" .
    "Telefon: " . $mobile . "\r\n" .
    "Email: " . $email . "\r\n" .
    "Prethodno iskustvo: " . $experience . "\r\n" .
    "Sekcija: " . $section . "\r\n";
	$headers = "From: " . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {

        $filename = '../report/prijavljeni.csv';
        echo "Zdravo";
        $file = fopen($filename, 'a');

        if ($file === false) {
            die('Error opening the file ' . $filename);
        }

        $array = array($name, $bornYear, $mobile, $email, $experience, $section);

        fputcsv($file, $array);
        fclose($file);
    }
}
?>