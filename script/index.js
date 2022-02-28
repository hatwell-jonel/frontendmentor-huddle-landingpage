const items = [
  {
    images: "./images/illustration-grow-together.svg",
    title: "grow together",
    desc: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "
  },
   {
    images: "./images/illustration-flowing-conversation.svg",
    title: "flowing conversation",
    desc: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
  },
  {
    images: "./images/illustration-your-users.svg",
    title: "your users",
    desc: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
  }
]

const listItems = document.querySelector(".list-items");

document.addEventListener('DOMContentLoaded', () => {
  let item = items.map( (item) => {
    const {images, title, desc} = item;
    return `
    <article class="item">
      <div class="item-img">
        <img src=${images} alt=${title}>
      </div>
      <div class="item-text">
        <h2 class="title">${title}</h2>
        <p class="desc">${desc}</p>
      </div>
    </article>
    `;
  })
  item = item.join();
  listItems.innerHTML += item;
})
