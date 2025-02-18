<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width", initial-scale=1>
        <title>Shiv Jayanti Utsav Samiti</title>
    
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
      <?php include('includes/database.php'); ?>
      <?php include 'header.php'; ?>
      <!-- #header -->
    
      <main id="main" class="main-page">

<section id="event" class="wow fadeInUp">
        <div class="container">
        <div class="section-headerC">
            <h2><?php if ($_SESSION['lan']=="mr"){echo "विद्यमान कार्यकारिणी";}else{echo "Current Members";} ?></h2>
          </div>
          <div class="row">

          <?php
    $sql = "SELECT * FROM members_details";
    $result = $con->query($sql);// Check if there are rows in the result
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {      // Output data of each row
?>
        <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="speaker">                    
        <img src="admin/administrator/<?php echo $row['img']; ?>"  alt="<?php echo $row['name']; ?>" class="img-fluid" height="200" width="640">
          <div class="details">
            <h3><?php if ($_SESSION['lan']=="mr"){echo $row['mname'];}else{echo $row['name'];} ?></h3>
            <p><?php if ($_SESSION['lan']=="mr"){echo $row['mpost'];}else{echo $row['post'];} ?></p>
          </div>
        </div>
      </div>
      <?php
    }
    } else {
        echo "<script>alert('0 results')</script>";
    }
?>
 </div>
  </div>
  </section>


  <!-- end of mahila sadasya -->



     <!-- start of माजी अध्यक्ष -->

     <section id="event" class="wow fadeInUp">
  <div class="container">
  <div class="section-headerC">
            <h2><?php if ($_SESSION['lan']=="mr"){echo "माजी पदाधिकारी";}else{echo "Past Members";} ?></h2>
          </div>
    <style>
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .speaker {
        text-align: center;
      }
    </style>
    <div class="row">
    <?php
    $sql = "SELECT * FROM members_past_details";
    $result = $con->query($sql);// Check if there are rows in the result
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {      // Output data of each row
    ?>
    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="speaker">                    
          <img src="admin/administrator/<?php echo $row['img']; ?>"  alt="<?php echo $row['name']; ?>" class="img-fluid" height="200" width="640">
          <div class="details">
            <h3><?php if ($_SESSION['lan']=="mr"){echo $row['mname'];}else{echo $row['name'];} ?></h3>
            <p><?php if ($_SESSION['lan']=="mr"){echo $row['mpost'];}else{echo $row['post'];} ?></p>
          </div>
        </div>
      </div>
    <?php
    }
    } else {
        echo "<script>alert('0 results')</script>";
    }
    ?>
    </div>
  </div>
</section>


  <!-- end of माजी अध्यक्ष -->



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




  <!--==========================
    Footer
  ============================-->
  <?php include 'footer.php'; ?>
  
  <!-- #footer -->

</body>
</html>