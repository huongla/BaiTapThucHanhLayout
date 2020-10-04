import React, { Component } from 'react'

export default class BT3SideBar extends Component {
    render() {
        return (
           
                <nav id="sidedar">
                    <div className="sidebar-header">
                        <h3>Shop Name</h3>
                    </div>
                    <ul className="list-unstyled components text-left pl-3 mt-3">
                        <li className="py-2 pl-2 border"><a href="#">Category 1</a></li>
                        <li className="py-2 pl-2 border"><a href="#">Category 2</a></li>
                        <li className="py-2 pl-2 border"><a href="#">Category 3</a></li>
                    </ul>
                </nav>
            

        )
    }
}
