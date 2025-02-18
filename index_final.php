<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width", initial-scale=1>
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
<link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400..700&family=Amita:wght@400;700&family=Arya:wght@400;700&family=Yatra+One&display=swap" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/animate/animate.min.css" rel="stylesheet">
  <link href="lib/venobox/venobox.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">

  <!-- =======================================================
    Theme Name: TheEvent
    Theme URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
    Author: BootstrapMade.com
    License: https://bootstrapmade.com/license/
  ======================================================= -->
</head>

<body >
<?php
include('includes/database.php');
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
   <!-- header -->
<?php include 'header.php'; ?>
  #header

  <!--==========================
    Intro Section
  ============================-->


  <section id="intro">

    
<!-- Slider -->

<section>
  <div id="slideshow-container">
        <?php
            // Fetch images from the database
            $sql = "SELECT id,img FROM home_slider_image LIMIT 5"; // Limit to first 5 images
            $result = $con->query($sql);

            if ($result === false) {
                die("Error executing query: " . $con->error);
            }

            if ($result->num_rows > 0) {
                // Output data of each row
                while ($row = $result->fetch_assoc()) {
        ?>
        <div class="mySlides">
          <img src="admin/administrator/<?php echo $row['img']; ?>">
        </div>
      <?php
        }
        } else {
            echo "0 results";
        }
      ?>

<!-- Slider code end -->
</section>

<!-- Slider code end -->

   

    
      <div class="content">
          <div class="principal">
             <!-- <b> <h1 id="title">शिवजयंती उत्सव समिती</h1></b>
              <p>02, वस्तू आणि सेवा कर भवन, माझगाव, मुंबई-400010</p> -->
          </div>
      </div>

  </section>

   
    <!--==========================
      Events Section
    ============================-->
    <section id="event" class="wow fadeInUp">
      <div class="container">
        <div class="section-header1">
          <b><h2><?php if ($_SESSION['lan']=="mr"){echo "आमचे मुख्य उपक्रम";}else{echo "Our main activities";} ?></h2></b>
          <!-- <p>येथे आमचे काही  उपक्रम आहेत</p> -->
        </div>

        <div class="row row-cols-3">
          
        <?php
    $sql = "SELECT * FROM events_container";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        $count = 1; // Counter to track the number of rows displayed
        while($row = $result->fetch_assoc()) { 
            if($count < 7) { // Check if the number of displayed rows is less than 3
                $count++; // Increment the counter
?>
            <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="speaker">
                    <img class="card-img-top" name="photo" src="admin/administrator/<?php echo $row['img']; ?>" alt="<?php echo $row['title']; ?>" class="img-fluid" height="300" width="640">
                    <div class="details">
                    <?php if ($_SESSION['lan'] == "en"): ?>
                        <h3><a href="event-details.php?id=<?php echo $row['id']; ?>"><?php echo $row['title']; ?></a></h3>
                        <p><?php echo $row['subtitle']; ?></p>
                    <?php else: ?>
                        <h3><a href="event-details.php?id=<?php echo $row['id']; ?>"><?php echo $row['mtitle']; ?></a></h3>
                        <p><?php echo $row['msubtitle']; ?></p>
                    <?php endif; ?>
                    </div>
                </div>
            </div>
<?php
            }
        }
    } else {
        echo "<script>alert('0 results')</script>";
    }
?>



</div>
<br>
<br><br>
      </div>
      <div class="section-header2">
        <h2><?php if ($_SESSION['lan']=="mr"){echo "आगामी उपक्रम(जानेवारी ते डिसेंबर २०२४)";}else{echo "Upcoming Activities (January to December 2024)";} ?></h2>

      </div>
<!--  -->
<!-- upcoming events changed for mobile view  -->
<!--  -->


    
    <div class="upcoming_events_div">
      <div class="events_container">
           <div class="upcoming_img_div">
               <img class="upcoming_events_image"  alt="img1" >
           </div>
             <div class="text_container">
                  <h1 class="event_title"></h1>
                  <p class="event_date"></p>
                  <p class="event_desc"></p>  
             </div>
      </div>
 </div>
    
    
    <!-- upcoming events end -->
 </section>


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
  <!-- <script src="contactform/contactform.js"></script> -->

  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>
</body>
</html>