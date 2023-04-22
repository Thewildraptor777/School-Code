<?php
//Get user message from chat window
$message = $_POST['message'];

//Echo user message
echo '<div class="user-message">'.$message.'</div>';

//Bot response
if($message == "hello") {
echo '<div class="bot-message">Hi there!</div>';
} elseif($message == "how are you?") {
echo '<div class="bot-message">I’m doing fine, thank you. How about you?</div>';
} else {
echo '<div class="bot-message">Sorry, I didn’t get that. Can you please ask me something else?</div>';
}
?>