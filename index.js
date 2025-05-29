const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        hour: 2
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        hour: 7
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        hour: 16
    }
]

const mainEl = document.getElementById("main-el")

for(let i = 0; i < posts.length; i++){
    mainEl.innerHTML += `
                <section class="fade-in">
                    <div class="post-header">
                        <img class="post-avatar" src="${posts[i].avatar}" alt="Vincent Van Gogh profile picture">
                        <div class="post-header-info">
                            <p class="post-name bold">${posts[i].name}</p>
                            <p class="post-location">${posts[i].location}</p>
                        </div> 
                    </div>
                    <img class="post-img" src="${posts[i].post}" alt="Vincent Van Gogh self portrait">
                    <div class="post-info">
                        <img class="post-icon" src="images/icon-heart.png" alt="like button shaped like a heart">
                        <img class="post-icon" src="images/icon-comment.png" alt="Comment button shapped like a thought bubblr">
                        <img class="post-icon" src="images/icon-dm.png" alt="Direct Message button shaped like a paper plane">
                        <p class="bold likes-count">${posts[i].likes} likes</p>
                        <p class="post-description"><span class="bold">${posts[i].username}</span>  ${posts[i].comment}</p>
                        <p class="post-date">${posts[i].hour} hours ago</p>
                    </div>
                </section> 
    
    `
}

