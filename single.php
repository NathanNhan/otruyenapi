<?php

get_header();

?>
  <div class="page-banner">
    <div class="page-banner__bg-image" style="background-image: url(<?php echo get_theme_file_uri('/images/ocean.jpg') ?>);"></div>
    <div class="page-banner__content container container--narrow">
      <h1 class="page-banner__title"><?php the_title();?></h1>
      <div class="page-banner__intro">
        <p>DONT FORGET TO REPLACE ME LATER</p>
      </div>
    </div>
  </div>

           <div class="container container--narrow page-section" id="container__single" style="margin-top: 50px;">

             </div>
             
             <div class="container container--narrow page-section" id="container__single" style="margin-top: 50px;">
               <div class="container_chapter">
                <div class="title__chapter">
                 <button>Chương 1</button>
                </div>
    
                <div class="content__chapter">
                  <h3>Nội dung chương 1</h3>
                  <h3>Chapter 2</h3>
                  <h3>Chapter 3</h3>
                </div>
               </div>

             </div>

  <?php

get_footer();

?>