<?php
include ('../../inc/functions.php');
include ('data.php');
include('../includes/head.php');
include('../includes/header.php');
?>

<main id="content" class="container about-trust-project" role="main">
    <article class="article">
        <header class="article__header">
            <?php echo svg('trust-project');?>
            <h4 class="trust-project__title">Trust Project</h4>
            <h1 class="article__title">About the Trust Project</h1>
        </header>

        <p>The Trust Project is a collaboration among news organizations around the world. Its goal is to create strategies that fulfill journalism’s basic pledge: <strong>to serve society with a truthful, intelligent and comprehensive account of ideas and events</strong>.</p>

        <p>The Trust Project uses six trust indicators to evaluate the trustworthiness of a news organization. The News Beat adheres to all of them:</p>

        <nav id="table-of-contents" class="trust-indicators">
            <ul class="checklist">
                <li><?php echo svg('check');?><a href="#ethics">Ethics­</a></li>
                <li><?php echo svg('check');?><a href="#diversity">Diversity</a></li>
                <li><?php echo svg('check');?><a href="#corrections">Corrections Policy and Practice</a></li>
                <li><?php echo svg('check');?><a href="#ownership">Ownership structure­</a></li>
                <li><?php echo svg('check');?><a href="#mission">Mission Statement with Coverage Priorities­</a></li>
                <li><?php echo svg('check');?><a href="#fact">Verification/Fact-checking Standards</a></li>
                <li><?php echo svg('check');?><a href="#engagement">Public Engagement Activities</a></li>

            </ul>
        </nav>

        <nav class="long-page-nav"><a href="<?php echo get_referral_url();?>">Go Back to the Article</a></nav>

        <h3 id="ethics">Ethics Statement</h3>
        <p>At The News Beat, we believe that public enlightenment is the forerunner of justice and the foundation of democracy. Ethical journalism strives to ensure the free exchange of information that is accurate, fair and thorough. An ethical journalist acts with integrity. We declare the following four principles as the foundation of ethical journalism and encourages their use in its practice by everyone who works for The News Beat:</p>

        <ol>
            <li>Seek truth and report it</li>
            <li>Minimize harm</li>
            <li>Act independently</li>
            <li>Be accountable and transparent</li>
        </ol>

        <?php echo internal_nav();?>


        <h3 id="diversity">Diversity Policy</h3>
        <p>Inclusiveness is at the heart of thinking and acting as journalists. The complex issues we face as a society require respect for different viewpoints. Race, class, generation, gender, and geography all affect one’s point of view. Reflecting these differences in our reporting leads to better, more nuanced stories and a better-informed community.</p>

        <p>We are interested in hearing from different ethnic, civic, and business groups in the communities we serve. Furthermore, we seek diverse voices in our management and reporting staff, and report our track record in the ASNE Newsroom Census.</p>

        <?php echo internal_nav();?>


        <h3 id="corrections">Corrections Policy and Practice</h3>
        <p>The News Beat is committed to telling readers when an error has been made, the magnitude of the error, and the correct information, as quickly as possible. This commitment and transparency is applicable to small errors as well as large, to short news summaries as well as large feature pieces. If our audiences cannot trust us to get the small things right, how can they trust us on the big things?</p>

        <p><a href="#report-error">Report an error.</a></p>

        <?php echo internal_nav();?>


        <h3 id="ownership">Ownership Structure</h3>
        <p>The News Beat is committed to transparency in our ownership structure and funding sources. We cite potential conflicts of interest on the same page as the relevant work. We are part of a publicly traded company and business decisions, but not news decisions, must take shareholder value in mind.</p>

        <p>Our newsgathering is independent of commercial or political interests. We do not accept gifts, including paid travel, in order to avoid any conflict-of-interest or appearance thereof. When we rely on an organization for a product or access to an event, we are transparent about the relationship and note it within the relevant work. The newsroom is insulated from advertisers and underwriters by a firewall.</p>

        <?php echo internal_nav();?>


        <h3 id="mission">Mission Statement with Coverage Priorities</h3>
        <p>The core purpose of The News Beat is to enhance society by creating, collecting and distributing high-quality news and information. Producing content of the highest quality and integrity is the basis for our reputation and the means by which we fulfill the public trust and our customers’ expectations. We provide citizens with the knowledge they need to make informed decisions, we convene community dialogue, and we engage audiences to share their stories. We celebrate diversity, embrace innovation, value lifelong learning and partner with those who share our passion for public service.</p>

        <?php echo internal_nav();?>



        <h3 id="fact">Verification/Fact-checking Standards</h3>
        <p>The News Beat commits to do its best to publish accurate information across all of its content. We take many steps to ensure accuracy:  We investigate claims with skepticism; question assumptions; challenge conventional wisdom; confirm information with subject-matter experts; and seek to corroborate what sources tell us by talking with other informed people or consulting documents. We verify content, such as technical terms, statistics, and the like, against source documents or make clear who is providing the information. We may share relevant portions of a story with a primary source or an outside expert to verify them. We stand by the information as accurate, and if it’s not, we will change it as quickly as possible and be transparent with our readers about the magnitude of the error.</p>

        <p>We guide our journalists to ask the following questions when double-checking information in a quest for the truth.</p>

        <ul>
            <li>How do you know?</li>
            <li>How can you be sure?</li>
            <li>Where is the evidence?</li>
            <li>Who is the source, and how does the source know?</li>
            <li>What is the supporting documentation?</li>
        </ul>

        <p><a href="#feedback">We welcome feedback</a> from our readers and sources regarding the information that we publish.</p>

        <?php echo internal_nav();?>


        <h3 id="engagement">Public Engagement Activities</h3>
        <p>You are a frontline witness to life here in this area – public safety, politics, housing, social movements, schools, culture – and your insights can help shape our news agenda. <a href="#feedback">We invite your comments and complaints on news stories, suggestions for issues and events to cover or sources to consult</a>, and your participation in our policy conversations and town hall meetings that follow news developments. We believe that news organizations have a responsibility to engage with the public on the values, issues and ideas of the day, and that we have much to gain in return.</p>

        <?php echo internal_nav();?>

        <section id="feedback" class="well">
            <h3>Leave Feedback</h3>

            <form class="feedback">
                <label for="name">Name</label>
                <input type="text" name="name" id="feedback-name" placeholder="Enter Name" value="" >

                <label for="feedback">Feedback</label>
                <textarea rows="3" name="feedback" id="feedback-comment" placeholder="Enter Feedback"></textarea>

                <input id="submit-feedback" type="button" class="btn btn-submit" value="Submit">
            </form>
        </section>

        <section id="report-error" class="well">
            <h3>Report an Error</h3>
            <form class="report-error">
                <label for="report-error-comment">Report an Error</label>
                <textarea rows="3" name="report-error-comment" id="report-error-comment" placeholder="What error(s) did you find?"></textarea>

                <input id="submit-error" type="button" class="btn btn-submit" value="Submit">
            </form>
        </section>
    </article>
</main>



<section id="report-error">
    <form>
    </form>
</section>

<?php include('../includes/footer.php');?>
