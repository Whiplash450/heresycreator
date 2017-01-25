<?php
$q = intval($_GET['q']);

$server   = "mysql.hostinger.co.uk";
$database = "u335151943_db1";
$username = "u335151943_whip";
$password = "Heresy450!";

$con = mysqli_connect($server, $username, $password, $database);
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
else
{
	$sql = "SELECT * FROM `Character` WHERE id = '".$q."'";
	$result = mysqli_query($con,$sql);

	if (!$result) {
	    echo "DB Error, could not list tables\n";
	    echo 'MySQL Error: ' . mysql_error();
	    exit;
	}
	$array = mysqli_fetch_assoc($result);
	//echo $result->num_rows;
	//echo "\nid = " . $array['id'];
	//echo "\nname = " . $array['name'];
	header('Content-Type: application/json');
	echo json_encode($array);
}

mysqli_close($con);
?>
