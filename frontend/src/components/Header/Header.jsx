import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const Header = () => {
    return (
        <div className='header'>
            
            <div className="background"></div>


            





            <div className='header-contents'>
               <div className="app-food">
    <div className="food-item">
        <img src={assets.backtic1} alt="" />
        <span className="hover-text">Juicy</span>
    </div>
    <div className="food-item">
        <img src={assets.backtic2} alt="" />
        <span className="hover-text">Refreshing</span>
    </div>
    <div className="food-item">
        <img src={assets.backtic3} alt="" />
        <span className="hover-text">Aromatic</span>
    </div>
    <div className="food-item">
        <img src={assets.backtic4} alt="" />
        <span className="hover-text">Rich</span>
    </div>
    <div className="food-item">
        <img src={assets.backtic5} alt="" />
        <span className="hover-text">Succulent</span>
    </div>
   
            </div>

                
                <h2>The Great indian kitchen for your Great hunger </h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
