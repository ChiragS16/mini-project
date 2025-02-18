<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Shiv Jayanti Utsav Samiti</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="img/favicon.png" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400..700&family=Amita:wght@400;700&family=Arya:wght@400;700&family=Tiro+Devanagari+Sanskrit:ital@0;1&family=Yatra+One&display=swap" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/venobox/venobox.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">
<style>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   
    padding:50px;
}

.image-wrapper {
    overflow: hidden;
    width: 100%; /* Ensure the wrapper takes up the full width of the grid cell */
    padding-bottom: 100%; /* Create a square aspect ratio */
    position: relative;
    transition: transform 0.3s; /* Add transition for smooth zoom effect */
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
}

.image-wrapper:hover img {
  transition: all ease-in-out 0.4s;

}

.image-wrapper:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1); /* Zoom in by 10% on hover */
}

.image-item {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire container */
    position: absolute;
    top: 0;
    left: 0;
    
}


  </style>
  <!-- =======================================================
    Theme Name: TheEvent
    Theme URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= -->
</head>

<body>
<?php
session_start(); // Start the session
if(isset($_GET['lang'])) {
    $_SESSION['lan'] = $_GET['lang'];
}
if (!isset($_SESSION['lan'])) {
    $_SESSION['lan'] = "mr"; // Set a default language if not already set
}
?>

  
 <!--==========================
    Header
  ============================-->
  <?php include 'header.php'; ?>
  <!-- #header -->
  
  <!-- <main id="main" class="main-page">

   -==========================
      event Details Section
    ============================-->

    <?php  
include('includes/database.php');

// Fetch event details from the database based on the provided id
$id = $_GET['id'];
$sql = "SELECT title, subtitle, description,img,mtitle, msubtitle, mdescription  FROM events_container WHERE id = ?";
$stmt = $con->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->bind_result($title, $subtitle, $description,$img,$mtitle, $msubtitle, $mdescription);
$stmt->fetch();
$stmt->close();

// Fetch distinct years from the database for the given image ID
$sql_years = "SELECT DISTINCT year FROM image_data WHERE image_id = ? order by year desc";
$stmt_years = $con->prepare($sql_years);
$stmt_years->bind_param("i", $id);
$stmt_years->execute();
$result_years = $stmt_years->get_result();

// Fetch all years into an array
$years = [];
while ($row = $result_years->fetch_assoc()) {
    $years[] = $row['year'];
}
$stmt_years->close();
?>
    
    <?php if ($_SESSION['lan'] == "en"): ?>
    <!-- English version of event details -->
    <div class="container">
        <div class="mt-2"></div>
        <div class="diwali_intro diwali_con">
            <b><h1><?php echo $title; ?></h1></b>
        </div>
        <br><br><br><br>
        <div class="diwali_con">
            <img src="admin/administrator/<?php echo $img; ?>" alt="Speaker 1" class="diwali_img"><br>
            <p><?php echo $description; ?></p>
        </div>
    </div>
<?php else: ?>
    <!-- Marathi version of event details -->
    <div class="container">
        <div class="mt-2"></div>
        <div class="diwali_intro diwali_con">
            <b><h1><?php echo $mtitle; ?></h1></b>
        </div>
        <br><br><br><br>
        <div class="diwali_con">
            <img src="admin/administrator/<?php echo $img; ?>" alt="Speaker 1" class="diwali_img"><br>
            <p><?php echo $mdescription; ?></p>
        </div>
    </div>
<?php endif; ?>

   
        
    
    <!--==========================
 next previous BUTTON for years

  ============================-->

</div>



<!--==========================
next previous and drop down for years

============================-->

<br><br>
<!-- Dropdown menu to select year -->
<?php 
  if (!empty($years) && $years[0] != ""){?>
<div class="dropdowncontainer">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">झालेल्या कार्यक्रमांची क्षणचित्रे</a>
        <select id="year-select" onchange="fetchImages(this.value)">
            
            <?php foreach ($years as $year): ?>
                <option value="<?php echo $year; ?>"><?php echo $year; ?></option>
            <?php endforeach; ?>
        </select>
    </nav>
</div>

<?php }?>




<!--==========================
    Venue after click year change pictures as per year
  ============================-->

  
  <?php
// Fetch images from the database based on image_id and year
$imageId = $_GET['id'];
$sql = "SELECT * FROM image_data WHERE image_id = $imageId and year =''"; // Assuming 'year' column contains NULL for images without a specific year
$imageResult = mysqli_query($con, $sql);

// Check if there are any image data
if (mysqli_num_rows($imageResult) > 0) {
    // Loop through each image data and display it
    echo "<div class='image-grid'>";
    while ($imageRow = mysqli_fetch_assoc($imageResult)) {
        $imageData = base64_encode($imageRow['image_data']);
        $imageSrc = "data:image/jpeg;base64," . $imageData;
        echo "<div class='image-wrapper'>";
        echo "<img src='$imageSrc' alt='{$imageRow['image_name']}' class='image-item'>";
        echo "</div>";
    }
    echo "</div>";
} else {
   
}

// Close the database connection
mysqli_close($con);
?>

  <!-- Image container to display fetched images -->
<div id="image-container"></div>
<script>
  // Function to fetch images based on the selected year
  function fetchImages(year) {
    // AJAX request to fetch images for the selected year
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        renderImages(JSON.parse(xhr.responseText));
      }
    };

    // If no year is selected, fetch images for the first available year
    if (!year) {
      const firstYearOption = document.getElementById("year-select").getElementsByTagName("option")[0]; // Assuming the first option is "Select Year"
      year = firstYearOption.value; // Get the value of the first year option
    }

    xhr.open("GET", "fetch_images.php?id=<?php echo $id; ?>&year=" + year, true);
    xhr.send();
  }

  // Function to render the fetched images
  function renderImages(images) {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear previous images

    // Create a new div to hold the grid of images
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("image-grid");

    images.forEach(function(imageData) {
      // Create a container for each image
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");
      imageWrapper.classList.add("img-fluid");

      // Create the image element
      const img = document.createElement("img");
      img.src = "data:image/jpeg;base64," + imageData; // Assuming images are JPEG format
      img.classList.add("image-item");

      // Append the image to the wrapper
      imageWrapper.appendChild(img);

      // Append the wrapper to the grid container
      gridContainer.appendChild(imageWrapper);
    });

    // Append the grid container to the main image container
    imageContainer.appendChild(gridContainer);
  }

  // Initial fetch of images when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    fetchImages(null); // Fetch images for the first available year
  });
</script>







</main>
   
  <!--==========================
    Footer
  ============================-->
  <?php include 'footer.php'; ?>
  <!-- #footer -->


  <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/superfish/hoverIntent.js"></script>
  <script src="lib/superfish/superfish.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/venobox/venobox.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>

  <!-- Contact Form JavaScript File -->
  <script src="contactform/contactform.js"></script>


</body>

</html>