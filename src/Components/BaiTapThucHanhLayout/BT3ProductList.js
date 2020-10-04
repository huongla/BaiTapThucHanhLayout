import React, { Component } from 'react'
import BT3ProductItem from './BT3ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className="container px-0 mx-0 mt-2">
                <div className="row text-center mt-2">
                        <div className="col-4">
                            <BT3ProductItem />
                        </div>
                        <div className="col-4">
                            <BT3ProductItem />
                        </div>
                        <div className="col-4">
                            <BT3ProductItem />
                        </div>
                </div>
                <div className="row text-center mt-2">
                        <div className="col-4">
                            <BT3ProductItem />
                        </div>
                        <div className="col-4">
                            <BT3ProductItem />
                        </div>
                        <div className="col-4">
                            <BT3ProductItem />
                        </div>
                </div>


            </div>
        )
    }
}
