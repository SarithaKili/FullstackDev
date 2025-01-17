import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={require('C:\Users\SARITHA\Documents\PROJECTS\food-del\frontend\public\backtic1.jpg')} alt="Image 1" />
            <img src={require('C:\Users\SARITHA\Documents\PROJECTS\food-del\frontend\public\backtic2.jpg')} alt="Image 2" />
            <img src={require('C:\Users\SARITHA\Documents\PROJECTS\food-del\frontend\public\backtic3.jpg')} alt="Image 3" />
            <img src={require('C:\Users\SARITHA\Documents\PROJECTS\food-del\frontend\public\backtic4.jpg')} alt="Image 4" />
            <img src={require('C:\Users\SARITHA\Documents\PROJECTS\food-del\frontend\public\backtic5.jpg')} alt="Image 5" />
            
            <div className='header-contents'>
     
                
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
