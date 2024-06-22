<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Here you would typically send an email, save to a database, etc.
    
    echo "Thank you, $name. Your message has been received.";
}
?>
