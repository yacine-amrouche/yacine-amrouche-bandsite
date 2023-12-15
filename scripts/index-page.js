


        const backend = new BandSiteApi('48bc6bc4-78d6-4b68-a757-b1dff5a33d60');

       const feedback = document.querySelector('.feedback');



        function displayComment(commentObject){


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
    
    
           
          
            feedbackHeaderName.textContent = commentObject.name;
            feedbackText.textContent = commentObject.comment;
            feedbackHeaderDate.innerText =  new Date(commentObject.timestamp).toDateString();

    
    
    
            feedback.appendChild(feedbackContainer);


        }
        async function displayComments(){
            try{
                const comments = await backend.getComments();
                console.log(comments);
                feedback.innerHTML = '';

                for (const comment of comments){
                    displayComment(comment);
                }


            }
            catch(error){
                console.log.error(error);
            }
        }

        displayComments();

         document.querySelector("#submit-btn").addEventListener("click", async (e) => {
    e.preventDefault();

     const newName = document.querySelector("#name");
     const newComment = document.querySelector('#comment');
     const newDate = document.querySelector('.feedback__header--date');



     newName.innerText = name;
     newComment.innerText = comment;

     const myNewComment = {
        name: e.target.name.value,
        comment: e.comment.value,
     }


     if (name.value === "" || comment.value === "") {
         alert("Please fill required fields");
         return;
     }
    await axios.post(backend, myNewComment);
    

    displayComments();




     name.value = "";
     comment.value = "";


  });


      

  //commentArray.unshift({name: name.value, date: date.value, comment: comment.value});

  //renderComments(commentArray, '.feedback');    
    

   
        





