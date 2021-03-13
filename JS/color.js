const sectionOne = document.querySelector('#ABOUT');
const sectionTwo = document.querySelector('#EXPERIENCE');
const sectionThree = document.querySelector('#EDUCATION');
const sectionFour = document.querySelector('#SKILLS');
const sectionFive = document.querySelector('#INTERESTS');
const sectionSix = document.querySelector('#CONTACT');

const nav_side = document.querySelector('.nav_right');

const body = document.querySelector('body');

const options = { };

const obeserver = new IntersectionObserver(function(entries,obeserver){
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target == sectionOne){
        document.body.style.backgroundColor = "#550385";
        nav_side.style.backgroundColor = "rgba(255,255,255,0)";       
              }
      if(entry.isIntersecting && entry.target == sectionTwo){
        document.body.style.backgroundColor = "#47026F";
        nav_side.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
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

const nav_obs = new IntersectionObserver(function(entries,obeserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      nav_side.style.height = "90%";       
            }
    else{
      nav_side.style.height = "9%";
    }
  })
},options);

obeserver.observe(sectionSix);
obeserver.observe(sectionFive);
obeserver.observe(sectionFour);
obeserver.observe(sectionThree);
obeserver.observe(sectionTwo);
obeserver.observe(sectionOne);

nav_obs.observe(sectionSix);

