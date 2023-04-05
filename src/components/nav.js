import React from "react"
import Image from "../images/Khair.png"

export default function NavBar() {
    return(
        <div className="navbar">
            <p>Gmail</p>
            <p>Images</p>
            <div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <img src={Image}/>
        </div>

    )
}