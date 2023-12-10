const showArray = [
    {
        date: "Mon sept 06 2021",
        venue: "Ronald lane",
        location: "San Francisci, CA",
    },
    {
        date: "tue sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisci, CA",
    },
    {
        date: "Fri oct 15 2021",
        venue: "View lounge",
        location: "San Francisci, CA",
    },
    {
        date: "Sat nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisci, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow center",
        location: "San Francisci, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisci, CA",
    },
];

const booking = document.createElement('div');
        booking.classList.add('booking');


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

        const bookingSection = document.querySelector('.booking--section');
        bookingSection.append(booking);




function renderShow(Shows, selector){
    for (let i = 0; i < Shows.length; i++){

        const item = Shows[i];

        


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



        showDate.textContent = item.date;
        showVenue.textContent = item.venue;
        showLocation.textContent = item.location;


        const booking = document.querySelector('.booking');
        booking.append(show);




    }
}

renderShow(showArray, '.booking');



