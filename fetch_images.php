<?php
include('includes/database.php');

// Get selected year from AJAX request
$selectedYear = $_GET['year'];
$id = $_GET['id'];

if($selectedYear == NULL){
    // Fetch images from the database based on the selected year
$sql_images = "SELECT image_data FROM image_data WHERE  image_id = ?";
$stmt_images = $con->prepare($sql_images);
$stmt_images->bind_param("i", $id);
$stmt_images->execute();
$result_images = $stmt_images->get_result();
$stmt_images->close();
}else{
    // Fetch images from the database based on the selected year
$sql_images = "SELECT image_data FROM image_data WHERE year = ? AND image_id = ?";
$stmt_images = $con->prepare($sql_images);
$stmt_images->bind_param("si", $selectedYear, $id);
$stmt_images->execute();
$result_images = $stmt_images->get_result();
$stmt_images->close();
}

// Store image data in an array  
$images = [];
while ($row = $result_images->fetch_assoc()) {
    $images[] = base64_encode($row['image_data']); // Assuming images are stored as BLOBs so base64 is used to retrieve original image format from blob
}

// Return JSON response
echo json_encode($images);
?>
