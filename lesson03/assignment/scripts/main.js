//pseudo code outline for script

//get json data entries:
$.getJSON('../data/data.json', function(data) {
  console.log(data);
/* since '$.getJSON' is asynchronous, we need to call a helper function within
  the callback so that there wont be any issues with using the date we're getting 
  from data.json */
  createCards(data);
});

//we make the helper function here.
function createCards(data) {
  let dataHTML = data.map(function(el) {
    //i know this isn't typical html insertion but this feels much more simplier than adding "appends" everywhere.
    let card = 
    `<article class="outer-box">
      <div class="inner-box">
        <div class="profile">
          <img src="img/unsplash-headshot.jpg" alt="headshot">
          <p class="name">${el.name} <br> <span class="job-title">${el.jobTitle}</span></p>
        </div>
        <div class="inner-most-box">
          <p><span class="bold">Company: </span>${el.company}</p>
          <p><span class="bold">Experience: </span>${el.experience}</p>
          <p><span class="bold">School: </span>${el.school}</p>
          <p><span class="bold">Major: </span>${el.major}</p>
          <p><span class="bold">Email: </span>${el.email}</p>
          
          <p> <img src="img/linkedin.svg" alt="linkedin logo" class="li-logo">${el.linkedInUrl}</p>
        </div>    
      </div>
    </article>`;
    return card;
  });
  $(".template-hook").append(dataHTML);
}

