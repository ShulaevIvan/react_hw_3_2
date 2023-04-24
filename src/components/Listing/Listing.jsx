import React from "react";

const Listing = (props) => {
    let qntLevelClass = undefined;
    return (
        <React.Fragment>
            <div className="item-list">
            {props.items.map((item, i) => {
                
                if (item.quantity <= 10)  qntLevelClass = 'item-quantity level-low';
                else if (item.quantity !== 10 && item.quantity <= 20) qntLevelClass = 'item-quantity level-medium';
                else qntLevelClass = 'item-quantity level-high';
                
                return (
                    <React.Fragment key={item.listing_id}>
                        <div className="item" id = {item.id}>
                            <div className="item-image">
                                <a key={item.listing_id} href={item.url}>
                                    <img src={item.MainImage ? item.MainImage.url_570xN: ''} alt={item.title}/>
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{item.title && item.title.length > 50 ? `${item.title.substring(0, 50)}...`: item.title}</p>
                                <p className="item-price">{item.currency_code} {item.price}</p>
                                <p className={qntLevelClass}>{item.quantity} left</p>
                                {/* <p className="item-quantity level-medium">{item.quantity} left</p> */}
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
            </div>
        </React.Fragment>
    );
}

export default Listing;