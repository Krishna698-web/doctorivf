const reviews = [
  {},
  {
    id: 1,
    heading: "Laxmi Meerakhor",
    content:
      " ವಿನುತಾ ಅಂದ್ರೆ ವಿಶೇಷತೆ ನನ್ ದಾಂಪತ್ಯ ಜೀವನದ 10 ನೇ ವರ್ಷಕ್ಕೆ ಮರೆಯಲಾರದ ವಿಶೇಷ ಉಡುಗೊರೆ ನೀಡಿದ ವಿನುತಾ ಮೇಡಂ ಅವರಿಗೆ ನನ್ನ ಹೃದಯ ತುಂಬಿದ ಅಭಿನಂದನೆಗಳು ಮತ್ತು ನನ್ನ ಜೀವನದಲ್ಲಿ ಮರೆಯಲಾಗದ ದೀಪಾವಳಿ ಉಡುಗೊರೆ ನೀಡಿದ ನಿಮಗೂ ನಿಮ್ಮ ಕುಟುಂಬದವರಿಗೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ಧಿಕ ಶುಭಾಶಯಗಳು ಮೇಡಂ ನನ್ನ ಜೀವನ ಪೂರ್ತಿ ಬೆಳಕು ನೀಡಿದ ನಿಮಗೆ ದೇವರ ಆಶೀರ್ವಾದ ಸದಾ ಕಾಲ ಇರಲಿ ಎಂದು ಎಲ್ಲ ದೇವರುಗಳಲ್ಲಿ ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ ಮೇಡಂ.",
  },
  {
    id: 2,
    heading: "Nadashree",
    content:
      "The First thing I wanna mention  abt Vinuta mam is that  she is the best version of a doctor .She is kind, good listener  and more than that she is  concerned abt her patient  more than patient herself.I was diagnosed with chocolate cyst in 2019 and got operated in my native where I had very bad experience. After a month I started seeing doctor vinuta for further checkups based on my relative's referal and that was the best decision I took. Vinuta mam made me so comfortable and she has treated me with so much of care. Unfortunately, I could not see doctor for 6months during covid and  I was diagnosed with cyst second time. I still remember the disappointment on her face when she found cyst formation again in my uterus.As the cyst size was big she had to carry out laproscopy .She carried out around 4 hours surgery where she corrected many mistakes done during my last surgery which was done by doctor in my native. She treated me with so much of love and care.Always I felt like she feels my pain. Post the surgery she tried her best to make me conceive naturally and for my surprise I was conceived naturally after the surgery .I really appreciate her effort , patience and care that she showed towards me throughout my journey till pregnancy.She suggested and talked to couple of doctors so that they can take care of me till delivery .Now I'm  7 months pregnant and still she is still in touch with the doctor who is seeing me. She treated me like a family member.I cant thank her enough. ",
  },
  {
    id: 3,
    heading: "Akshata & Pankaj",
    content:
      "It's was a time,when me and my wife lost hope of having baby, Its you who shown us a right path and helped in fulfilling our dream. We want to express our deepest gratitude for the exceptional care and support you provided throughout our IVF journey. Your expertise, compassion, and unwavering commitment played a pivotal role in making our dream of parenthood a reality. Thank you for guiding us with patience, answering our countless questions, and being a source of strength during both challenging and hopeful moments. Your dedication to helping families like ours is truly admirable, and we feel incredibly fortunate to have had you as our IVF doctor.",
  },
  {
    id: 4,
    heading: "Vani",
    content:
      "I am Grateful to you for my life , thank you for vinutha Kulkarni mam because nanna hagu nanna maneyavara kanasannu nanasu madidakke dhanyavadhagalu mam and I am so very happy mam Thank you so very much mam and your future all the best mam nemenda aellarigu channagiagli mam Thank you so much mam💐",
  },
  {
    id: 5,
    heading: "Mrs. Akshata",
    content:
      "Dr. Vinuta madam, I want to express my deepest gratitude for the role you played in the journey towards motherhood. I was unable to conceive after trying for many years but after consulting you made my dream of becoming a mother as reality From infertility to laproscopy, pregnancy and 9 months you reassured to give me strength and complete care through all ups and downs. I feel very fortunate to have u as my IVF doctor. Thankyou from bottom of my heart for the positive impact you have had in my life and giving me the greatest gift imaginable Thank you ..",
  },
];

const more = document.querySelectorAll(".more");
const read_more_button = document.querySelectorAll(".btn");

const backdrop = document.getElementById("backdrop");
const close = document.getElementById("close");
const content_heading = document.getElementById("content_heading");
const content_para = document.getElementById("content_para");

for (let i = 1; i <= read_more_button.length; i++) {
  document.getElementById(`btn-${i}`).addEventListener("click", function () {
    if (reviews[i].id === i) {
      backdrop.style.display = "block";
      content_heading.innerText = reviews[i].heading;
      content_para.innerText = reviews[i].content;
    }
  });
}

document.getElementById("btn-3").onclick = function () {};

close.onclick = function () {
  backdrop.style.display = "none";
};
