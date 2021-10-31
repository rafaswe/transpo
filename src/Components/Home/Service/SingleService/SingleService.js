import { faDollarSign, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { _id, name, img, price, description } = props.singleService;
    const doller = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top rounded rounded-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <hr />
                    <p className="card-text text-muted">{description}</p>
                    <p className="customized-text-color">Price : {price} {doller}</p>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/placeOrder/${_id}`}><button className="btn btn-outline-danger">Parches Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;