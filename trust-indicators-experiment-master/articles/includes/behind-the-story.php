<section class="behind-the-story well">
    <h2 class="behind-the-story__title">Behind the Story</h2>

    <h3>Why we wrote it</h3>
    <?php echo $why_wrote;?>

    <h3>Who we spoke to</h3>
    <ul>
        <?php foreach($who_spoke_to as $who) {
            echo "<li>$who</li>";
        }?>
    </ul>

    <h3>Where this story was written</h3>
    <?php echo $where_written;?>

    <h3>Who edited this story</h3>
    <?php echo $editor;?>

    <h3>Corrections</h3>
    <?php echo $corrections;?>

    <h3>Version History</h3>
    <?php echo $version_history;?>

    <p>This story was researched, written, and published in accordance with The News Beat’s best practices.</p>

</section>
