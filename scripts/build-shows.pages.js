
const backend = new BandSiteApi('48bc6bc4-78d6-4b68-a757-b1dff5a33d60');

        const bookingSection = document.querySelector('.booking--section')

        const booking = document.createElement('div');
        booking.classList.add('booking');
        bookingSection.appendChild(booking);


        const bookingTitle = document.createElement('h2');
        bookingTitle.classList.add('booking__title');
        booking.appendChild(bookingTitle);
        bookingTitle.textContent = "Shows";


        const bookingTablet = document.createElement('div');
        bookingTablet.classList.add('booking__tablet');
        booking.appendChild(bookingTablet);

        const showHeader = document.createElement('p');
        showHeader.classList.add('show__header');
        bookingTablet.appendChild(showHeader);
        showHeader.textContent = "Date";

        const showHeaderVenue = document.createElement('p');
        showHeaderVenue.classList.add('show__header');
        bookingTablet.appendChild(showHeaderVenue);
        showHeaderVenue.textContent = "Venue";

        const showHeaderLoc = document.createElement('p');
        showHeaderLoc.classList.add('show__header');
        bookingTablet.appendChild(showHeaderLoc);
        showHeaderLoc.textContent = "Location";


     



//function renderShow(Shows, selector){
    //for (let i = 0; i < Shows.length; i++){

        //const item = Shows[i];
        
       

        function displayShow(showObject){

            const show  = document.createElement('div');
            show.classList.add('show');
           
    
    
    
    
            const showHeaderMobile = document.createElement('p');
            showHeaderMobile.classList.add('show__header--mobile');
            show.appendChild(showHeaderMobile);
            showHeaderMobile.textContent = "Date";
    
    
    
            const showDate = document.createElement('p');
            showDate.classList.add('show__date');
            show.appendChild(showDate);
            
    
    
            const showHeaderMobileV = document.createElement('p');
            showHeaderMobileV.classList.add('show__header--mobile');
            show.appendChild(showHeaderMobileV);
            showHeaderMobileV.textContent = "Venue";
    
    
    
            const showVenue = document.createElement('p');
            showVenue.classList.add('show__venue');
            show.appendChild(showVenue);
           
    
            const showHeadermobileL = document.createElement('p');
            showHeadermobileL.classList.add('show__header--mobile');
            show.appendChild(showHeadermobileL);
            showHeadermobileL.textContent = "Location";
    
    
            const showLocation = document.createElement('p');
            showLocation.classList.add('show__location');
            show.appendChild(showLocation);
           
    
    
    
            const showBtn = document.createElement('button');
            showBtn.classList.add('show__btn');
            show.appendChild(showBtn);
            showBtn.textContent = "BUY TICKET";
    
    
    
            showDate.textContent = new Date(showObject.date).toDateString();
            showVenue.textContent = showObject.place;
            showLocation.textContent = showObject.location;
    
    
            booking.appendChild(show);

        



            show.addEventListener('click', function (e){

                let showDay = document.getElementsByClassName('show');

        
                   if (show.classList.contains('class')){
                    show.classList.remove('show__selected')

                   }else{
                    show.classList.add('show__selected')
                   }

                
    
            });
      
            
    


        }
        async function displayShows(){
            try{
                const Shows = await backend.getShows();
                console.log(Shows);

                for (const showDay of Shows){
                    displayShow(showDay);

                }

         

            

                    

            }
            catch(error){
                console.log.error(error);
               
            }

            
        }

        displayShows();

      

      
     


       

        



     
            

    
        
        




    

//renderShow(showArray, '.booking');
//show.addEventListener('click', function (e){
         
    //let getArray = document.getElementsByClassName('show');
    //e.preventDefault;
    //show.classList.add('show__selected');






    
   

    