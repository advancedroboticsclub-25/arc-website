const teamData = [
  {
    name: "Prajwal Shrestha",
    Role: "President",
    image: "./assets//imgs/team/20210414185602_IMG_8710 - Prajwal Shrestha.JPG",
  },
  {
    name: "Sujan Khanal",
    Role: "Vice President",
    image:
      "./assets//imgs/team/IMG-31814777d8f38de76f21b58b32c28262-V_2 - Sujan Khanal.jpg",
  },

  {
    name: "Ujjwal Shrestha",
    Role: "Secretary",
    image: "./assets//imgs/team/IMG_20220215_213632 - ujjwal shrestha.jpg",
  },

  {
    name: "Aaradhana Ojha",
    Role: "Treasurer",
    image: "./assets//imgs/team/IMG_20191004_092635 - aaradhana ojha.jpg",
  },
  {
    name: "Ayush Aryal",
    Role: "Vice-Secretary",
    image: "./assets//imgs/team/Ayush Aryal.jpg",
  },
  {
    name: "Kritika Pandey",
    Role: "Coordinator",
    image: "./assets//imgs/team/FB_IMG_1664293800103 - kritika pandey.jpg",
  },
  {
    name: "Ayush Marhatta",
    Role: "Project Manager",
    image: "./assets/imgs/team/IMG_20200109_125428 - Ayush Marhatta.jpg",
  },

  {
    name: "Ritesh Bista",
    Role: "Lead Stategist",
    image: "assets/imgs/team/ritesh.jpg",
  },
  {
    name: "Samrat Neupane",
    Role: "Webmaster",
    image: "assets/imgs/team/samrat.jpg",
  },

  {
    name: "Saru Pradhan",
    Role: "Designer",
    image:
      "./assets//imgs/team/IMG-bac2106744e9421c981e3c4bf4234fe2-V - Saru Pradhan.jpg",
  },

  {
    name: "Kabin Giri",
    Role: "Software Coordinator",
    image: "./assets//imgs/team/kabin.jpg",
  },
  {
    name: "Sumita Dangal",
    Role: "IT Head",
    image: "./assets//imgs/team/Sumita Dangal.jpg",
  },
  {
    name: "Aayush Raj Nepal",
    Role: "Hardware Lead",
    image: "./assets//imgs/team/a.jpg",
  },

  {
    name: "Arpan Paudel",
    Role: "Member",
    image: "./assets//imgs/team/IMG_20220416_100647_544 - Arpan Paudel.jpg",
  },
  {
    name: "Bhuwan Basnet",
    Role: "Member",
    image:
      "./assets//imgs/team/CamScanner 02-06-2022 20.00 - Bhuwan Basnet.jpg",
  },

  {
    name: "Chirayu Prasai",
    Role: "Member",
    image: "./assets//imgs/team/IMG_20220530_110914_416 - Chirayu Prasai.jpg",
  },
  {
    name: "Kanchan Dhamala",
    Role: "Member",
    image: "assets/imgs/team/kanchan.jpg",
  },

  {
    name: "Upendra Regmi",
    Role: "Member",
    image: "assets/imgs/team/upendra.jpg",
  },
  {
    name: "Mohit Paudel",
    Role: "Member",
    image: "assets/imgs/team/mohit.jpg",
  },
  {
    name: "Aviskar Poudel",
    Role: "Member",
    image: "assets/imgs/team/aviskar.jpg",
  },
  {
    name: "Ayush Joshi",
    Role: "Member",
    image: "assets/imgs/team/ayushjoshi.jpg",
  },
  {
    name: "Prabhu shah",
    Role: "Member",
    image: "assets/imgs/team/prabhu.jpg",
  },
  {
    name: "Suvechchha Pandeya",
    Role: "Member",
    image: "assets/imgs/team/Suvechchha.jpg",
  },
];

const teamList = document.getElementById("team-list");

// Loop through the JSON data and create member cards
teamData.forEach((member) => {
  const memberCard = document.createElement("div");
  memberCard.classList.add("swiper-slide", "testi-item");

  memberCard.innerHTML = `
        <img alt=" " class=" team-img text-center img-fluid move-animation" src="${member.image}">
        <i class="fas fa-quote-left"></i>
        <div class="intro">
            <h3>${member.name}</h3>
            <h5>${member.Role}</h5>
        </div>
    `;

  // Append the member card to the parent container
  teamList.appendChild(memberCard);
});
