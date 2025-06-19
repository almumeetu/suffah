<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data and sanitize
    $name    = htmlspecialchars(trim($_POST["full_name"] ?? ''));
    $email   = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST["contact_subject"] ?? ''));
    $message = htmlspecialchars(trim($_POST["contact_message"] ?? ''));

    if ($name && $email && $subject && $message) {
        $to = "support@nobothemes.com"; 

        $headers  = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            echo "success";
        } else {
            echo "Something went wrong. Mail not sent.";
        }
    } else {
        echo "Please fill in all required fields.";
    }
} else {
    echo "Invalid request.";
}
?>
