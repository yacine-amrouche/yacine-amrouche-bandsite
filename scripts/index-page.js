const commentArray = [
    {
        name: "Connor Walton",
        comment: "This is art This is inexplicable magic expressed in the purest way everything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains",
        date: "02/17/2021",
        
    },
    {
        name: "Emilie beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021",
        
    },
    {
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my  spine. What a beautiful expression of creativity. Can't get enough.",
        date: "02/17/2021",
        
    }
];
function renderComments(comments, selector){
    const commentsSelection = document.querySelector(selector);

    commentsSelection.replaceChildren();
   

    for (let i = 0; i < comments.length; i++){
        const item = comments[i];

        const feedbackContainer = document.createElement('div');
        feedbackContainer.classList.add('feedback__container');

        const feedbackContainerImg = document.createElement('div');
        feedbackContainerImg.classList.add('feedback__container--img');


        feedbackContainer.appendChild(feedbackContainerImg);


        const icon = document.createElement('i');
        icon.classList.add('icone');

        feedbackContainerImg.appendChild(icon);

        


        const feedbackContainerHeader = document.createElement('div');
        feedbackContainerHeader.classList.add('feedback__container--header');

        feedbackContainer.appendChild(feedbackContainerHeader);

        const feedbackHeader = document.createElement('div');
        feedbackHeader.classList.add('feedback__header');

        feedbackContainerHeader.appendChild(feedbackHeader);

        const feedbackHeaderName = document.createElement('p');
        feedbackHeaderName.classList.add('feedback__header--name');
        feedbackHeader.appendChild(feedbackHeaderName);

        

        const feedbackHeaderDate = document.createElement('p');
        feedbackHeaderDate.classList.add('feedback__header--date');
        feedbackHeader.appendChild(feedbackHeaderDate);


        
        


        const feedbackText = document.createElement('p');
        feedbackText.classList.add('feedback__text');


        feedbackContainerHeader.appendChild(feedbackText);



        feedbackHeaderName.textContent = item.name;
        feedbackHeaderDate.textContent = item.date;
        feedbackText.textContent = item.comment;




        commentsSelection.appendChild(feedbackContainer);

        
    }

    
}
 renderComments(commentArray, '.feedback');

 document.querySelector("#submit-btn").addEventListener("click", function (e) {
   e.preventDefault();

    const name = document.querySelector("#name");
    const comment = document.querySelector('#comment');
    
    const  currentDate = new Date(Date.now());
     const dateDay = currentDate.toLocaleDateString();




    if (name.value === "" || comment.value === "") {
        alert("Please fill required fields");
        return;
    }
    commentArray.unshift({name: name.value, date: dateDay, comment: comment.value});

    renderComments(commentArray, '.feedback');

    name.value = "";
    comment.value = "";


 });


