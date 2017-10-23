<main id="content" class="container" role="main">
    <article class="article">
        <header class="article__header">
            <?php if($identifier === 'trust') {?>
                <div class="category">
                    <span class="category__type"><?php echo $article_category;?></span>
                    <section class="category__content">
                        <?php include('article-types.php');?>
                    </section>
                </div>
            <?php } ?>
            <h2 class="article__title"><?php echo $title;?></h2>
            <p class="byline">Posted on <time pubdate="pubdate"><?php echo $pubdate;?></time></p>
            <div class="article__extra-header-info">
                <div class="author">
                    <?php if($identifier === 'trust') { ?>
                            <img class="author__image" src="<?php echo $author_image;?>" />
                        <?php }?>
                    <p class="author__name">By <?php echo $author;?></p>
                    <p class="author__job">The News Beat Staff Reporter</p>
                    <?php if($identifier === 'trust') {include('author-bio.php');}?>
                </div>

                <?php
                if($identifier === 'trust') {?>
                    <div class="trust-project">
                        <a href="../about-the-trust-project/?referrer=<?php echo urlencode(get_current_url());?>">
                            <?php echo svg('trust-project');?>
                            <div class="trust-project__title-wrap">
                                <h4 class="trust-project__title">Trust Project</h4>
                                <p class="trust-project__learn-more">Learn More</p>
                            </div>
                        </a>
                    </div>
                <?php }?>
            </div>
        </header>

        <figure class="featured-image">
            <img class="article-img article-img--featured" src="<?php echo $featured_img;?>" />
            <figcaption><?php echo $featured_img_caption;?></figcaption>
        </figure>

        <? echo $article;?>

        <?php
        if($identifier === 'trust') {
            include('trust-project-callout.php');
            include('behind-the-story.php');
        }

        include('comments.php');

        ?>

    </article>
</main>
