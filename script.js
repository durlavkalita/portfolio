mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// blog content
const result = document.querySelector('.result');
const base_url = 'https://arcane-caverns-09297.herokuapp.com/api/'
function getPosts() {
  fetch (`${base_url}posts`)
  .then(posts=> {
    console.log(posts);
    return posts.json();
  })
  .then(displayPosts);
}
function displayPosts(posts) {
  if(posts.length === 0) {console.log('No Post Found'); return;}
  posts.forEach(post => {
    if(post.published!==false) {
      createPostCard(post);
    }
  });
}
function createPostCard(post) {
  const div = document.createElement('div');
  div.classList.add('post-div');

  const h2 = document.createElement('h2');
  h2.textContent = post.title;
  h2.classList.add('post-h2');
  div.appendChild(h2);

  const h3 = document.createElement('h3');
  h3.textContent = `Written by - ${post.author}`;
  h3.classList.add('post-h3');
  div.appendChild(h3);

  const h32 = document.createElement('h3');
  h32.textContent = `Written at - ${post.timestamp}`;
  h32.classList.add('post-h32');
  div.appendChild(h32);

  const p1 = document.createElement('p');
  p1.textContent = post.body;
  p1.classList.add('post-p1');
  div.appendChild(p1);

  result.appendChild(div);
}
getPosts();