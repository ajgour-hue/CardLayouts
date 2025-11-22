const Users = [
  {
    firstname: "John",
    profession: "Web & UI/UX Designer",
    dp: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
    cover: "https://i.pinimg.com/736x/c8/cd/90/c8cd9002a6edbf84f1e42a182eb00797.jpg",
    rating: 4.8,
    duration: "2 Days",
    rate: "$40/hr"
  },
  {
    firstname: "Alice",
    profession: "Software Developer",
    dp: "https://i.pinimg.com/1200x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 4.2,
    duration: "5 Days",
    rate: "$30/hr"
  },
  {
    firstname: "Bob",
    profession: "Video Editor",
    dp: "https://i.pinimg.com/1200x/60/1b/da/601bda44ec8a8373797658024597e11f.jpg",
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 4.0,
    duration: "9 Days",
    rate: "$28/hr"
  },
  {
    firstname: "Charlie",
    profession: "Backend Developer",
    dp: "https://i.pinimg.com/1200x/36/24/85/362485cff39036464d0e54b4bdd3a5b8.jpg",
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 3.8,
    duration: "12 Days",
    rate: "$24/hr"
  },
  {
    firstname: "Tom",
    profession: "Assignment Writer",
    dp: "https://i.pinimg.com/1200x/46/bf/9a/46bf9ad5422d5e5aa5d7a49a57619891.jpg",
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 4.1,
    duration: "4 Days",
    rate: "$1/hr"
  },
   {
    firstname: "Charlie",
    profession: "Backend Developer",
    dp: "https://i.pinimg.com/1200x/36/24/85/362485cff39036464d0e54b4bdd3a5b8.jpg",
    cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    rating: 3.8,
    duration: "12 Days",
    rate: "$24/hr"
  },
];

let sum = "";
Users.forEach(function (elem) {
  sum += `
    <div id="card">

        <!-- TOP with COVER -->
        <div id="top" style="
            background-image: url('https://i.pinimg.com/736x/c8/cd/90/c8cd9002a6edbf84f1e42a182eb00797.jpg');
            background-size: cover;
            background-position: top;
        ">
            <div id="profile-pic">
                <img src="${elem.dp}" style="width:100%; height:100%; object-fit:cover;">
            </div>
        </div>

        <!-- BOTTOM -->
        <div id="bottom">
        
            <div id="up">
                <div class="one">
                    <h1>${elem.firstname}</h1>
                    <p>${elem.profession}</p>
                </div>
                <div class="two">
                    <h2>Tools</h2>
                </div>
            </div>

            <div class="bottom-info">

                <div class="box">
                    <i class="star">★</i>
                    <h3>${elem.rating}</h3>
                    <p>rating</p>
                </div>

                <div class="divider"></div>

                <div class="box">
                    <h3>${elem.duration}</h3>
                    <p>duration</p>
                </div>

                <div class="divider"></div>

                <div class="box">
                    <h3>${elem.rate}</h3>
                    <p>rate</p>
                </div>

                <button class="btn">Get in touch</button>
            </div>

        </div>

    </div>
  `;
});

document.querySelector("main").innerHTML = sum;
