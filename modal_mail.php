<?php
    if(isset($_POST['submit'])){
		$name=$_POST['client_name'];
		$email=$_POST['client_mail_id'];
		$phone=$_POST['client_phone_number'];
	
		$to='livexcellence1@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Provident Capella';
		$message="Project_name:"."Provident Capella"."\n"."Name :".$name."\n"."Phone :".$phone."\n";
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1 style=\"text-align:center\">Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
			echo '<h3 style="text-align:center"><a href="https://drive.google.com/open?id=1bRynYudHLMevU-HG8PmdhqrGWHglwfnh">Click here to download Brochure</a><h3>';
		}
		else{
			echo "Something went wrong!";
		}
	}
?>


