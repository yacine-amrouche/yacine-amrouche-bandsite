


        const backend = new BandSiteApi('be689c81-6c01-40ba-9e5b-b3b517364b74');

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
                comments.sort((a, b) => b.timestamp - a.timestamp);
                
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

            const newName = document.querySelector("#name").value;
            const newComment = document.querySelector("#comment").value;

            newName.textContent = name;
            newComment.textContent = comment;

            const myNewComment = {
              name: newName,
              comment: newComment,
            };

            if (newName.value === "" || newComment.value === "") {
              alert("Please fill required fields");
              return;
            };

            await backend.postComment(myNewComment);

            displayComments();

            newName.value = "";
            newComment.value = "";

          });
          displayComments();
          backend.deleteComment("aa5812ad-3846-447a-b32f-0576179b3fb3")
         


    
       
           


           












      
  
    

   
        





