import React from 'react';
import "./DeliverTo.scss";

const DeliverTo = () => {

    const handleSubmit = () => {
        console.log('Confirmation clicked!');
        // should the link to purchase page be in here?
    };

    return (
        <form className="delivery" type= "submit">
            <h3 className="delivery__questions">Deliver to...</h3>

            <div className="delivery__recipients-container">
            
                <input type="text" 
                id="recipientName"
                name="recipientName"
                className="delivery__input"
                placeholder="Marie Antoinette">
                </input>
            </div>

            <h3 className="delivery__questions delivery__questions--time">When?</h3>

            <div className="delivery__time-container">

            <input type="text" 
                id="deliveryTime"
                name="deliveryTime"
                className="delivery__input"
                placeholder="Now">
                </input>


            
            </div>

            {/* Add Link to navigate to a dummy purchase page/component */}
            <div className="delivery__button-container">
            <button className="delivery__button" onClick={handleSubmit}>Confirm</button>
            </div>
        </form>
    );
};

export default DeliverTo;