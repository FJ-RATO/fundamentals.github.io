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
        console.log("s1");
      }
      if(entry.isIntersecting && entry.target == sectionTwo){
        document.body.style.backgroundColor = "#47026F";
        console.log("s2");
      }
      if(entry.isIntersecting && entry.target == sectionThree){
        document.body.style.backgroundColor = "#390259";
        console.log("s3");
      }
      if(entry.isIntersecting && entry.target == sectionFour){
        document.body.style.backgroundColor = "#2B0144";
        console.log("s4");
      }
      if(entry.isIntersecting && entry.target == sectionFive){
        document.body.style.backgroundColor = "#1D012E";
        console.log("s5");
      }
      if(entry.isIntersecting && entry.target == sectionSix){
        document.body.style.backgroundColor = "#0F0018";
        console.log("s6");
      }
      console.log(entry.target)
    })
},options);

obeserver.observe(sectionSix);
obeserver.observe(sectionFive);
obeserver.observe(sectionFour);
obeserver.observe(sectionThree);
obeserver.observe(sectionTwo);
obeserver.observe(sectionOne);

