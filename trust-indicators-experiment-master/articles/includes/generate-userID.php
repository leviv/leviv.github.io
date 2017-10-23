<script>

    // try to get userID from localStorage
    var userID = localStorage.getItem('userID');
    // if not found, generate and store it
    if(userID === null) {
        userID = '<?php echo uniqid('trust_');?>';
        localStorage.setItem('userID', userID);
    }
    var pageTitle = '<?php echo str_replace(' ', '-', $title);?>';
</script>
