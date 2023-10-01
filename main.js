import "./style.css";

const memberContainer = document.querySelector(".team-member");
const faqContainer = document.querySelector(".faq");
const qAndA = [
  {
    question: "What platforms do you develop apps for?",
    answer:
      "We develop apps for a variety of platforms including iOS, Android, and cross-platform solutions. Our experienced developers use technologies",
  },
  {
    question: "What industries do you specialize in for app?",
    answer:
      "Our app development expertise span across variousindustries such as healthcare, e-commerce,finance,education,and more.",
  },
  {
    question: "How can i request a quotefor my project",
    answer:
      "Requesting a quote is easy. Simply visit our Contact page and provide details about your project",
  },
  {
    question: "How do you approach cross- platform app development?",
    answer:
      "For cross-platform app development, we utilize frameworks like React Native and Flutter. These frameworks allow us to develop apps that function seamlessly on both iOS and Android",
  },
];

const teamMember = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    name: "Taylor Bale",
    position: "Content Writer",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Christian Naz",
    position: "Product Manager",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Eyzen Nile",
    position: "UI Designer",
  },
];

teamMember.forEach((member) => {
  let memberHtml = `<div class="members">
  <img
    class="member-img"
    src="${member.imgUrl}"
    alt=""
  />

  <h3>${member.name}</h3>
  ${member.position}
</div>`;

  memberContainer.innerHTML += memberHtml;
});

qAndA.forEach((qstinAns) => {
  let qaHtml = `<div>
    <h2>${qstinAns.question}</h2>
    <p class="text-gray">
      ${qstinAns.answer}
    </p>
  </div>`;
  faqContainer.innerHTML += qaHtml;
});
