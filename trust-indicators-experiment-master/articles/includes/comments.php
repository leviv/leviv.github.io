<section class="comments-section">
    <div class="new-comment">
        <h3 class="add-comment-title">Leave a Comment</h3>
        <form class="add-comment">
            <label for="commenter-name">Name</label>
            <input type="text" class="form-control" name="commenter-name" id="commenter-name" placeholder="Enter Name" value="" >
            <label for="commenter-comment">Comment</label>

            <textarea class="form-control" rows="3" name="commenter-comment" id="commenter-comment" placeholder="Enter Comment"></textarea>

            <input type="hidden" id="comment-identifier" name="comment-identifier" value="<? echo $identifier;?>" />
            <input id="submit-comment" type="button" class="btn btn-submit" value="Submit">
        </form>
    </div>
</section>
