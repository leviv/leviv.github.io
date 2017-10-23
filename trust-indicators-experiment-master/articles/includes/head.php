<!DOCTYPE html>
<html>
<head>
    <?php
        $user_ip = get_the_ip();
        $current_url = get_current_url();
    ?>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><? echo $title;?> | The News Beat</title>

    <?php $current_url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";?>
    <meta property="og:site_name" content="The News Beat"/>
    <meta property="og:title" content="<? echo $title;?>"/>
    <meta property="og:image" content="<? echo dirname(dirname($current_url)) .'/articles/'. $featured_img;?>"/>
    <meta property="og:url" content="<? echo $current_url;?>"/>
    <meta property="og:description" content="<? echo strip_tags(substr($article,0,240))?>&hellip;" />

    <link rel="stylesheet" href="../../dist/css/styles.min.css" />
    <!-- Typekit Fonts -->
    <script src="https://use.typekit.net/rca2zto.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>

    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
    <![endif]-->

    <script>
        var studyType = '<? echo $identifier;?>';
    </script>

</head>

<body>

  <div id="user-ip" class="hidden" data-ip="<? echo $user_ip;?>"></div>
  <div class="screen-reader-text" style="position: absolute; width: 0; height: 0;">
      <?php include('../../dist/svg/svg.svg');?>
  </div>
