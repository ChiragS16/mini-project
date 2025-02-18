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
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet">

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

<body>

<!--==========================
    Header
  ============================-->
  <?php include 'header.php'; ?>
  <!-- #header -->

  <main id="main" class="main-page">

    <!--==========================
      Speaker Details Section
    ============================-->
    <section id="speakers-details" class="wow fadeIn">
      <div class="container">
        <div class="section-header">
          <h2>Speaker</h2>
          <p>When you have a dream, you've got to grab it and never let go.</p>
        </div>

        <div class="row">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <img src="img/speakers/1.jpg" alt="Speaker 1" class="img-fluid">
          </div>

          <div class="col-md-6">
            <div class="details">
              <h2>Speaker</h2>
              <div class="social">
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-facebook"></i></a>
                <a href=""><i class="fa fa-google-plus"></i></a>
                <a href=""><i class="fa fa-linkedin"></i></a>
              </div>
              <p style="color: rgb(242, 247, 247); font-size: medium;">Whether you're having a rough day and need some motivation to assure yourself that it's all going to be OK, or you're just looking for a mission statement for the day, these inspirational quotes will help you put one foot in front of the other and make the small or sweeping changes that you desire.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere pariatur tempore dignissimos fugiat necessitatibus nam debitis laudantium ut rerum amet, veritatis perferendis ab? Doloribus dolorum quos aut officia illum?
                Aperiam quisquam laborum et modi dolorum ipsa quas, sunt, nam voluptatibus temporibus cumque molestiae quaerat praesentium quia neque natus! Fugiat omnis autem quae aut nam suscipit praesentium aperiam nostrum numquam.
                Quisquam voluptatibus ratione, inventore vitae quidem eum placeat mollitia quae non aperiam numquam culpa, in quasi dicta nam possimus natus magni odit nostrum laudantium amet accusantium ipsum deleniti! Eos, architecto?</p>
            </div>
          </div>
          
        </div>
      </div>

    </section>

  </main>

   


  
   <!--==========================
 next previous BUTTON for years

  ============================-->

<div class="year-picker-container">
  <button class="prev" id="prev-year">Previous Year</button>
  <div id="year-display">
    <!-- year display -->
  </div>
  <button class="next" id="next-year">Next Year</button>
</div>
</div>
</div>


<!--==========================
next previous and drop down for years

============================-->

<br><br>
<div class="dropdowncontainer">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">EXPLORE THE PAST</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<!-- code for dropdown years linked with year wise images -->
  <select name="" id="drop-down" onchange="handleChange(this.value)"> </select>
<!--  -->
</nav>
</div>






<!--==========================
    Venue after click year change pictures as per year
  ============================-->

  <section id="venue" class="wow fadeInUp">
    <div class="container-fluid">
    <div class="container-fluid venue-gallery-container">
      <!-- image to be add here  -->
      <div class="row no-gutters" id ="imgRender">
      </div>
      <!-- <img src="img/gallery/1.jpg" alt="test img" style="background: red;"> -->
    </div>
  </section>
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

  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>
</body>

</html>