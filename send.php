<?php
if( $_POST ){
	require 'phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();

	$mail->Host = 'smtp.mail.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'alex_win_1@bk.ru'; // логин от вашей почты
	$mail->Password = 'nasiba21'; // пароль от почтового ящика
	$mail->SMTPSecure = 'ssl';
	$mail->Port = '465';
	
	$mail->CharSet = 'UTF-8';
	$mail->From = 'alex_win_1@bk.ru'; // адрес почты, с которой идет отправка
	$mail->FromName = 'w'; // имя отправителя
	$mail->addAddress('alex_win_1@mail.ru');
	$mail->addCC('alex_win_1@mail.ru');

	$mail->isHTML(true);

	$mail->Subject = $_POST['subject'];
	$mail->Body = "Адрес: {$_POST['adr']}<br> 
				   Адрес назначения: {$_POST['cadr']}<br> 
				   Груз \ Объём: {$_POST['value']}<br> 
				   Контакты: {$_POST['email']}<br> 
				   Сообшение:". nl2br($_POST['msg']) ;
	$mail->AltBody = "Имя: {$_POST['name']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}";


	if( $mail->send() ){
		$answer = '1';
	}else{
		$answer = $mail->ErrorInfo;
	}
	die( $answer );
}
?>