const themeToggle = document.getElementById('themeToggle');
const newPostButton = document.getElementById('newPostButton');
const postList = document.getElementById('newPosts');

const newPostModal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postBody');
const postDate = document.getElementById('postDate');
const submitPost = document.getElementById('submitPost');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Light Theme';
    } else {
        themeToggle.textContent = 'Dark Theme';
    }
});

newPostButton.addEventListener("click", () => {
    newPostModal.style.display = "flex";

});

closeModal.addEventListener("click", () => {
    newPostModal.style.display = "none";
});

newPostModal.addEventListener('click', (event) => {
    if (event.target === newPostModal) {
        newPostModal.style.display = 'none';
    }
});

submitPost.addEventListener("click", () => {
    const title = postTitle.value;
    const body = postContent.value;
    const date = postDate.value;

    const post = document.createElement('div');
    post.classList.add('postCard');
    post.textContent = `${title}\n${body}\n${date}`;
    addCardHoverListeners(post);
    postList.prepend(post);

});

function addCardHoverListeners(card) {
    card.addEventListener('mouseenter', () => {
        card.classList.add('postCard-hovered');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('postCard-hovered');
    });
}

document.querySelectorAll('.postCard').forEach(addCardHoverListeners);