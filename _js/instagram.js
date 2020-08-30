const instagramFeed = () => {
  fetch('https://www.instagram.com/ispykenny/?__a=1')
  .then((res) => res.json())
  .then(({graphql}) =>  {
    let {edge_owner_to_timeline_media : images } = graphql.user;
    let parentEl = document.querySelector('.instagram-feed');
    let imageItem = '';
    images.edges.map((image) => {

      imageItem += `
      <a class="instagram-feed__item" href=https://www.instagram.com/p/${image.node.shortcode} target="_blank">
        <div class="instagram-feed__item-image">
          <img class="loaded" src="${image.node.thumbnail_src}"/>
        </div>
      </a>
      `
    })

    parentEl.innerHTML = imageItem;
  })
}

export default instagramFeed;