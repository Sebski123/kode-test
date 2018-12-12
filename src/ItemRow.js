import React from "react";
import * as format from "./format";

export default function ItemRow(props) {
    const {
        id,
        description,
        quantity,
        unitPrice,
        onQuantityInc,
        onQuantityDec
    } = props;

    function handleQuantityInc(e) {
        onQuantityInc(id);
    }

    function handleQuantityDec(e) {
        onQuantityDec(id);
    }

    return (
        <div className="row item">
            <div className="col-sm-8 item-description">{description}</div>
            <div className="col-sm-2">
                <div className="quantity-picker">
                    <button
                        type="button"
                        className="btn"
                        onClick={handleQuantityInc}
                    >
                        +
                    </button>
                    <div className="current-quantity">{quantity}</div>
                    <button
                        type="button"
                        className="btn"
                        onClick={handleQuantityDec}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="col-sm-2 line-total text-right">
                {format.formatAmount(quantity * unitPrice, "DKK")}
            </div>
        </div>
    );
}
