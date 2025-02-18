<!--==========================
    Footer
  ============================-->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-sm-8 footer-contact">
            <h4><?php echo ($_SESSION['lan'] == "mr") ? "संपर्क" : "Contact Us"; ?></h4>
            <p class="foot_t">
            <?php echo ($_SESSION['lan'] == "mr") ? "वस्तू व सेवा कर विभाग माझगांव, मुंबई " : "Goods and Services Tax Department Mazgaon, Mumbai "; ?><strong><?php echo ($_SESSION['lan'] == "mr") ? "फोन" : "Phone"; ?>:</strong> <?php echo ($_SESSION['lan'] == "mr") ? "+०२२-२३७६००५" : "+022-2376005"; ?>
            <strong>ईमेल:</strong> susmmum@gmail.com
            </p>

          </div>
          <div class="col-sm-4 footer-contact">
            <h4><?php echo ($_SESSION['lan'] == "mr") ? "महत्त्वाची संकेतस्थळे" : "Important websites"; ?></h4>
            <div class="social-links">
              <a href="https://www.youtube.com/@Shivjayanti_Utsav_Samiti" class="youtube"><i class="fa fa-youtube"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100068851998985" class="facebook"><i class="fa fa-facebook"></i></a>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        &copy;<?php echo ($_SESSION['lan'] == "mr") ? "Copyright" : "Copyright"; ?>  <strong> <?php echo ($_SESSION['lan'] == "mr") ? "शिवजयंती उत्सव समिती" : "Shivjayanti Utsav Samiti"; ?></strong><br><i class="fa fa-registered"></i> All Rights Reserved
      </div>
      <div class="credits">
      </div>
    </div>
  </footer>
  <!-- #footer -->