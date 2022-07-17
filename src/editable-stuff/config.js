// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ffffff",
  firstName: "",
  middleName: "",
  lastName: "",
  message: "부산에 괴물이 산다",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hashirshoaeb",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "전시개요",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "<<부산에 괴물이 산다.>>는 부산에서 일어났던 인권유린사건인 ‘형제복지원’사건을 주제로 한 장소특정적 사건 기획전시이다. \
    본 전시는 통상의 역사적 사건을 주제로한 여타 전시들과 마찬가지로 역사적 사건을 조명해 고발하는 성향을 띄고있다. 나와 타인의 경험과 체험, 기억과 기록, 감각과  인지 사이의 좁혀지지 않는 간극을 매우려는 시도에서 비롯되었다.\
    사람은 경험을 바탕으로한 개인 자신의 기억과 불특정 다수의 체험인 타인의 역사적 기록이란 두 간극속에 살아간다.\
    우리가 직접 경험하지 못한 타인의 기억을 통해 부산이란 얼마간의 좁은 시공간을 배경으로 시스템이란 거대 구조를 이룬 사회가 불특정 개인에게 영향을 미치는지, 일상에서 마주하는 사물(공산품-오브제), 제조품(광고-디자인)과 작품이랑 세 가지의 각기 다른 특성을 가진 독립체들이 어떤 연결고리를 가지는지 파헤친다.\
    작가는 작품을 통해 특유의 예술관인 기획과 작품의 재편집 방식을 직접적으로 드러내며 감각을 통해 기억을 만드는 행위에 개입한다. 또한 작가의 철학인 물질 변형을 통한 시공간의 재구성으로 획득 가능한 정치적 공간 확보에 대한 실험이다. ",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

//Leadership SECTION
const leadership = {
  show: true,
  heading: "주요작품",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/img1.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/painting1.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../assets/img/painting2.jpg"), 
      label: "Third slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"100%",
    
  }
};

// SKILLS SECTION
// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 90 },
//     { name: "SQL", value: 75 },
//     { name: "Data Structures", value: 85 },
//     { name: "C/C++", value: 65 },
//     { name: "JavaScript", value: 90 },
//     { name: "React", value: 65 },
//     { name: "HTML/CSS", value: 55 },
//     { name: "C#", value: 80 },
//   ],
//   softSkills: [
//     { name: "Goal-Oriented", value: 80 },
//     { name: "Collaboration", value: 90 },
//     { name: "Positivity", value: 75 },
//     { name: "Adaptability", value: 85 },
//     { name: "Problem Solving", value: 75 },
//     { name: "Empathy", value: 90 },
//     { name: "Organization", value: 70 },
//     { name: "Creativity", value: 90 },
//   ],
// };

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "전시장소",
  message:
    "부산광역시 수영구 민락본동로11번길 53 1층 써니갤러리",
  email: "",
  phone: "051-714-5727",
};


const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, getInTouch, experiences, leadership };
