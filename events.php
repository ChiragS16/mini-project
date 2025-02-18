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
<?php
include('includes/database.php');
?>
<!-- -==========================
    Header
  ============================-->
  <?php include 'header.php'; ?>
  <!-- #header  -->

  <main id="main" class="main-page">

        <!--==========================
      Events Section
    ============================-->
    <section id="event" class="wow fadeInUp">
    <!-- slider -->
    <div class="event-slider">
        <!-- list Items -->
        <div class="list">
            <?php
            // Fetch images from the database
            $sql = "SELECT id,img FROM events_container LIMIT 6"; // Limit to first 5 images
            $result = $con->query($sql);

            if ($result === false) {
                die("Error executing query: " . $con->error);
            }

            if ($result->num_rows > 0) {
                // Output data of each row
                while ($row = $result->fetch_assoc()) {
                    ?>
                    <div class="item">
                        <img src="admin/administrator/<?php echo $row['img']; ?>">
                        <div class="content">
                            <section id="event_intro"><h1 id="title"><b><?php if ($_SESSION['lan']=="mr"){echo "आमचे उपक्रम";}else{echo "Our Events";} ?></b></h1></section>
                        </div>
                    </div>
                    <?php
                }
            } else {
                echo "0 results";
            }
            ?>
        </div>
        <!-- button arrows -->
        <div class="arrows">
            <button id="prev"><</button>
            <button id="next">></button>
        </div>
    </div>
    <!-- thumbnail -->
    <div class="thumbnail">
        <?php
        // Reset the result pointer to the beginning
        $result->data_seek(0);

        if ($result->num_rows > 0) {
            // Output data of each row
            while ($row = $result->fetch_assoc()) {
                ?>
                <div class="item">
                    <a href="event-details.php?id=<?php echo $row['id']; ?>"><img src="admin/administrator/<?php echo $row['img']; ?>"></a>
                </div>
                <?php
            }
        } else {
            echo "0 results";
        }
        ?>
    </div>
</section>




  


  <!--==========================
      Events Section
    ============================-->
    <section id="event" class="wow fadeInUp">
        <div class="container">
          
  
          <div class="row">
            

<?php
    $sql = "SELECT * FROM events_container";
    $result = $con->query($sql);// Check if there are rows in the result
    if ($result->num_rows > 0 ) {
        while($row = $result->fetch_assoc()) {      // Output data of each row
?>
            <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="speaker">
                    <img class="card-img-top" name="photo" src="admin/administrator/<?php echo $row['img']; ?>" alt="<?php echo $row['title']; ?>" class="img-fluid" height="200" width="640">
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
    } else {
        echo "<script>alert('0 results')</script>";
    }
    
    
?>



            </div>
  
   </section>
      <!--==========================
        Schedule Section
      ============================-->
      <section id="schedule" class="section-with-bg">
        <div class="container wow fadeInUp">
          <div class="section-header">
            <section id="ue_section-header1"><h2><?php if ($_SESSION['lan']=="mr"){echo "पुढील  उपक्रम";}else{echo "Next Events";} ?></h2></section>
            <class id="ue_section-header1 "> <p><?php if ($_SESSION['lan']=="mr"){echo "आमचे वेळापत्रक खालीलप्रमाणे";}else{echo "Calender wise Events";} ?></p></class>
          </div>
  
          <ul class="nav nav-tabs" role="tablist">
          <!--  <li class="nav-item">
              <a class="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
            </li>  -->
            <li class="nav-item">
              <a class="nav-link" href="#day-2" role="tab" data-toggle="tab"><?php if ($_SESSION['lan']=="mr"){echo "नवीन कार्यक्रमांसाठी येथे क्लिक करा";}else{echo "Click to see next events";} ?></a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
            </li> -->
          </ul>
  
          <!-- <h3 class="sub-heading">आमचे वेळापत्रक खालीलप्रमाणे</h3> -->
  
          <div class="tab-content row justify-content-center">
              
         
            <!-- Future Events -->
            <div role="tabpanel" class="col-lg-9  tab-pane fade" id="day-2">
              <?php


              $sql = "SELECT * FROM upcoming_events"; // SQL query to select all events
              $result = mysqli_query($con, $sql); // Execute the query


              if (!$result) {
                  die('Error: ' . mysqli_error($con)); // If query execution fails, display error and stop execution
              }

              if (mysqli_num_rows($result) > 0) {
                  // If there are events in the database
                  while ($row = mysqli_fetch_assoc($result)) {
                      // Loop through each row and display event details
              ?>
                      <div class="row schedule-item">
                          <div class="col-md-2"><time><?php echo ($_SESSION['lan'] == 'mr') ? $row['mday'] : $row['day'] ?><br><?php echo ($_SESSION['lan'] == 'mr') ? $row['mdate'] : $row['date']; ?></time></div>
                          <div class="col-md-10">
                              <div class="speaker">
                                  <img src="admin/administrator/<?php echo $row['img']; ?>" alt="<?php echo ($_SESSION['lan'] == 'mr') ? $row['mtitle'] : $row['title']; ?>">
                              </div>
                              <div class="up_e_t"><b><?php echo ($_SESSION['lan'] == "mr") ? $row['mtitle'] : $row['title']; ?></b><br><?php echo ($_SESSION['lan'] == 'mr') ? $row['msubtitle'] : $row['subtitle']; ?></div>
                              <p></p>
                          </div>
                      </div>
              <?php
                  }
              } else {
                  // If no events found in the database
                  echo "No events found.";
              }

              // Close the database connection
              mysqli_close($con);
              ?>

  
            </div>
            <!-- Future Events -->
  
          </div>
  
        </div>
  
      </section>
  <br><br><br>

  





  <!--==========================
    Footer
  ============================-->
  <?php include 'footer.php'; ?>
  
  <!-- #footer -->

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
  <script src="js/slider.js"></script>

</body>
</html>