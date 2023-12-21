<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<?php
		if (isset($GET_['name'])) {
			$name = $GET_['name'];
		}
	?>
    <a href="./pdf/Skema Ahli Madya Penginderaan Jauh.pdf" download class="download-btn"><?php echo $name;?>
        <i class="fa fa-download"></i>
    </a>
    <br>
    <br>
    <embed align='center' src="pdf/<?php echo $name;?>.pdf" height="500" width="100%"></embed>
</body>
</html>