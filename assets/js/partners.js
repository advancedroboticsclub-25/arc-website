const teamData = [
  {
    name: "Ict Byte",
    image: "assets/imgs/communitypartners/ict.png",
  },
];

const teamList = document.getElementById("community-list");

// Loop through the JSON data and create member cards
teamData.forEach((member) => {
  const memberCard = document.createElement("div");
  memberCard.classList.add("swiper-slide", "testi-item");

  memberCard.innerHTML = `
          <img alt=" " class=" team-img text-center img-fluid move-animation" src="${member.image}">
          <i class="fas fa-quote-left"></i>
          <div class="intro">
              <h3>${member.name}</h3>
             
          </div>
      `;

  // Append the member card to the parent container
  teamList.appendChild(memberCard);
});
