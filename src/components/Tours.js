import React from 'react';
import Card from './Card';
function Tours({tours, removetours}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {/* now instead of creating 7 diff cards we will use a map function  */}
                {

                    // The map function in JavaScript creates a new array by applying a function to each item in an existing array. In your code, tours.map((tour) => {... }) takes each item in the tours array and creates a new <Card> component for each one, returning a new array of these components.Here function is arrow function (tour) => { return <Card></Card> } this one.

                    //remove toh card mai ho rha hai so removetours will be send as a prop
                    // jb bhi list kai uppar map function use kro eek key send krni hoti hai... key should be unique identifier like id if there is an case where there is no unique identifier then pass index
                    tours.map((tour) => {
                        return <Card key={tour.id} tours={tour} removetours={removetours}></Card>
                        //Here we have clone the  tours and have passed it 
                    })
                }
            </div>
        </div>
    );
}
export default Tours;