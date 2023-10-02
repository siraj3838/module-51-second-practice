
const OrderCard = ({sdata}) => {
    const {image, phone_name, price, brand_name} = sdata || {}
    return (
        <div>
            <div className="card glass">
                <figure><img className="max-h-[220px]" src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{phone_name}</h2>
                    <p>{brand_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now {price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;