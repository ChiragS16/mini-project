<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
   #lang-button{
    width:150px;border:1px solid black; background-color:white;color:black;margin-top:15%;
   }
   #lang-button:hover{
    color:red;background-color:#f2dede;
   }
    </style>
<header id="header">
    <div class="container">

      <div id="logo" class="pull-left">
        <a href="index.php" class="scrollto"><img src="img/shiv logo.jpg" alt="" title=""></a>

   
      </div>

      <nav id="nav-menu-container">
          <ul class="nav-menu">
                <li><a href="index.php"><?php echo ($_SESSION['lan'] == "mr") ? "मुखपृष्ठ" : "Home"; ?></a></li>
                <li><a href="about_us.php"><?php echo ($_SESSION['lan'] == "mr") ? "संस्थे बद्दल" : "About Us"; ?></a></li>
                <li><a href="events.php"><?php echo ($_SESSION['lan'] == "mr") ? "आमचे उपक्रम" : "Events"; ?></a></li>
                <li><a href="members.php"><?php echo ($_SESSION['lan'] == "mr") ? "कार्यकारिणी मंडळ" : "Members"; ?></a></li>
                <li>
                        <button id="lang-button" onclick="setLanguage()">
                                <?php echo ($_SESSION['lan'] == 'mr') ? 'English' : 'Marathi'; ?>
                        </button>
                </li>
            </ul>
        </nav>
    </div>
  </header>

  <script>
    function setLanguage() {
    
    <?php if ($_SESSION['lan']=='en'){?>
      
        window.location.href = 'index.php?lang=' + "mr";
        window.location.href = window.location.href;
      alert(  <?php echo $_SESSION["lan"] ?>);
    <?php }else{?>
       
        window.location.href = 'index.php?lang=' + "en";
        window.location.href = window.location.href;
        alert(  <?php echo $_SESSION["lan"] ?>)
    <?php }; ?>

    }
    </script>


