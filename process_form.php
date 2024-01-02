<?php
if ($_SERVER["REQUEST_METHOD"] == $_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $family = $_POST['family'];
    $phone = $_POST['phone'];
    // Basic validation (you might want to add more)
    if (empty($name) || empty($email) || empty($message) || empty($phone) || empty($family)) {
        echo "Please fill in all fields.";
    } else {
        $to = "bornamashaye@gmail.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nFamily:$family\nPhone:$phone\nEmail: $email\nMessage: $message";

        if (mail($to, $subject, $body)) {
            echo "پیام شما موفقا ارسال شد";
        } else {
            echo "عه یه مشکلی پیش اومده دوباره امتحان کن";
        }
    }
}
?>
