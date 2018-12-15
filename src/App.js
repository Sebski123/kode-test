/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ItemRow from "./ItemRow";
import "./App.css";
import * as api from "./api";
import * as format from "./format";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleQuantityDec = this.handleQuantityDec.bind(this);
        this.handleQuantityInc = this.handleQuantityInc.bind(this);
    }

    componentDidMount() {
        api.getItems().then(items => this.initValues(items)).then(items => this.setState({ items }));
    }

    handleQuantityInc(id) {
        const { items } = this.state;
        if(items[id-1].quantity < items[id-1].maxQuantity) {
            items[id-1].quantity ++;
        }
        this.setState(items);
    }

    handleQuantityDec(id) {
        const { items } = this.state;
        if(items[id-1].quantity > items[id-1].minQuantity){
            items[id-1].quantity --;
        }
        this.setState(items);
    }

    initValues(items) {
        for(let i = 0;i < items.length; i++) {
            items[i].quantity = items[i].minQuantity;
        }
        return items;
    }

    totalPrice() {
        const { items } = this.state;
        let total = 0;
        for(let i = 0;i < items.length; i++) {
            total += items[i].quantity * items[i].unitPrice;
        }
        return total;
    }

    render() {
        const { items } = this.state;
        return (
            <div className="app">
                <div className="container header">
                    <div className="step-list">
                        <a href="#" className="step active">
                            1
                        </a>
                        <a href="#" className="step">
                            2
                        </a>
                        <a href="#" className="step">
                            3
                        </a>
                    </div>
                    <h1>Vælg tillægsvarer</h1>
                </div>
                <div className="container items-list">
                    {items.map(item => (
                        <ItemRow
                            key={item.id}
                            {...item}
                            onQuantityInc={this.handleQuantityInc}
                            onQuantityDec={this.handleQuantityDec}
                        />
                    ))}
                    <div className="row totals">
                        <div className="col-sm-3 offset-md-9 text-right">
                            I ALT {format.formatAmount(this.totalPrice(), "DKK")}
                        </div>
                    </div>
                </div>
                <div className="container footer">
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button type="button" className="btn btn-primary">
                                Videre
                            </button>
                        </div>
                    </div>
                    <div className="footer-bar">
                        BookingStudio A/S - Kode opgave 2018
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
