const sectionOne = document.querySelector('#ABOUT');
const sectionTwo = document.querySelector('#EXPERIENCE');
const sectionThree = document.querySelector('#EDUCATION');
const sectionFour = document.querySelector('#SKILLS');
const sectionFive = document.querySelector('#INTERESTS');
const sectionSix = document.querySelector('#CONTACT');

const body = document.querySelector('body');

const options = { };

const obeserver = new IntersectionObserver(function(entries,obeserver){
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target == sectionOne){
        document.body.style.backgroundColor = "#550385";
              }
      if(entry.isIntersecting && entry.target == sectionTwo){
        document.body.style.backgroundColor = "#47026F";
              }
      if(entry.isIntersecting && entry.target == sectionThree){
        document.body.style.backgroundColor = "#390259";
              }
      if(entry.isIntersecting && entry.target == sectionFour){
        document.body.style.backgroundColor = "#2B0144";
              }
      if(entry.isIntersecting && entry.target == sectionFive){
        document.body.style.backgroundColor = "#1D012E";
              }
      if(entry.isIntersecting && entry.target == sectionSix){
        document.body.style.backgroundColor = "#0F0018";
              }
    })
},options);

obeserver.observe(sectionSix);
obeserver.observe(sectionFive);
obeserver.observe(sectionFour);
obeserver.observe(sectionThree);
obeserver.observe(sectionTwo);
obeserver.observe(sectionOne);

