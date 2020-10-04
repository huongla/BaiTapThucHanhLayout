import React, { Component } from "react";
import BT3SideBar from "./BT3SideBar";
import BT3Carousel from "./BT3Carousel";
import BT3ProductList from "./BT3ProductList";

export default class BT3Content extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 pt-3">
            <BT3SideBar />
          </div>
          <div className="col-9 mt-3">
            <div className="col-12">
              <BT3Carousel />
            </div>
            <div className="col-12">
              <BT3ProductList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
