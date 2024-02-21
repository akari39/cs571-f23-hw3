import { useEffect, useState } from "react";

export default function BakedGood(props) {

    const [quantity, setQuantity] = useState(0);
    const [reduceButtonDisabled, setReduceButtonDisabled] = useState(false);

    useEffect(disableReduce, [quantity]);

    function increase() {
        setQuantity(quantity + 1);
    }

    function reduce() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    function disableReduce() {
        if (quantity === 0) {
            setReduceButtonDisabled(true);
            return;
        }
        setReduceButtonDisabled(false);
    }

    const backgroundHighlightStyle = {
        backgroundColor: "Red",
    };

    return <div style={props.featured ? backgroundHighlightStyle : null}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>${props.price}</p>
        <div>
            <button className="inline" onClick={reduce} disabled={reduceButtonDisabled}>-</button>
            <p className="inline">{quantity}</p>
            <button className="inline" onClick={increase}>+</button>
        </div>
    </div>
}