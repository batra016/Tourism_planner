import React, { useState } from "react";


//we have passed a copy of data into card so we can specidy parameters here

function Card({tours, removetours}) {

    //usestate variable for readmore - intially the value is set to false
    const [readmore, setreadmore] = useState(false);

    //starting mai only 200 characters description is visible so we need to extract that substring 
    // console.log(tours.info);
    const description = readmore ? tours.info : ` ${tours.info.substring(0, 200)}....`;

    //read more handler
    function readmorehandler() {
        setreadmore(!readmore);
        // we want that if the value if true set it to false , if its false then true
    }
    return (
        <div className="card">
            {/* Image */}
            <img src={tours.image} className="image"></img>

            <div className="tour-info">
                {/* Tour Details */}
                <div className="tour-details">
                    <h4 className="tour-price">{tours.price}</h4>
                    <h4 className="tour-name">{tours.name}</h4>
                </div>

                {/* description */}
                <div className="description">
                    {description}

                    <span className="read-more" onClick={readmorehandler}>
                        {
                            //In React, the curly braces {} inside a JSX element like <span> are used to embed JavaScript expressions. 
                            // if readmore is = true then set value as show less otherwise read more ... initially the value is false
                            readmore ? `Show less` : `Read more`
                        }
                    </span>
                </div>
            </div>


            {/* child can that function passed by parents in the form of props */}

            <button className="btn-red" onClick={() => removetours(tours.id)}>Not Interested</button>

            {/* removetour kya krega ki jiss city ka data nhi chahiye wwoh remove krke dobara render krna padega */}
        </div>
    )
}

export default Card;