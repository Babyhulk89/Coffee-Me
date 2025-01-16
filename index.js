document.addEventListener("DOMContentLoaded", function () {
    var commentsSection = document.getElementById("commentsSection");
    var commentsContainer = document.getElementById("commentsContainer");
    var submitCommentButton = document.getElementById("submitComment");

    // Center the comments section on the page
    function centerCommentsSection() {
        var mainContentHeight = document.querySelector('main').offsetHeight;
        var commentsSectionHeight = commentsSection.offsetHeight;
        var topOffset = (mainContentHeight - commentsSectionHeight) / 2;
        commentsSection.style.marginTop = topOffset + 'px';
    }

    // Center the comments section on load
    centerCommentsSection();

    // Re-center the comments section when the window is resized
    window.addEventListener('resize', centerCommentsSection);

    // Handle comment submission
    submitCommentButton.addEventListener("click", function () {
        var commentText = commentsSection.querySelector("textarea").value;
        if (commentText.trim() !== "") {
            addComment(commentText);
            commentsSection.querySelector("textarea").value = "";
        }
    });

    // Add a comment to the comments container
    function addComment(text) {
        var commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");

        var commentParagraph = document.createElement("p");
        commentParagraph.textContent = text;
        commentBox.appendChild(commentParagraph);

        var likeButton = document.createElement("button");
        likeButton.textContent = "Like";
        likeButton.classList.add("like-button");
        likeButton.addEventListener("click", function () {
            var currentLikes = parseInt(likeButton.getAttribute("data-likes") || "0", 10);
            currentLikes++;
            likeButton.textContent = "Like (" + currentLikes + ")";
            likeButton.setAttribute("data-likes", currentLikes);
        });

        commentBox.appendChild(likeButton);
        commentsContainer.appendChild(commentBox);
    }
});
