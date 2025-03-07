import React, { Component } from "react";

import styled from "styled-components";
// this is styled component styling method
const Title = styled.div`
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: white;
        text-transform: uppercase;
        &:hover{color: red;}
        `;
        
// const Nav = styled.div`
//         display: flex;
//         justifyContent: space-between;
//         padding: 10px 20px;
//         backgroundColor: black;
//         color: white;
//         alignItems: center;`;

class Navbar extends React.Component {
  render() {

    const {cartCount} = this.props;
    return (
        <div className="navbar" style={styles.navbar}>
           <Title>Movie-App</Title>
           <div style={styles.cartIconContainer}>
            <img alt="cart-icon" 
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
            style={styles.cartIcon}/>
            <span style={styles.cartCount}>{cartCount}
                </span>        
            </div> 
        </div>
    );
  }
}
export default Navbar;

//inline styling method
const styles = {

    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
        backgroundColor: 'black',
        padding: "2px 6px",
        // right:"1px",
        // top: "1px",
        fontSize: "20px",

    },
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    cartCount: {
        background: '#FFFFFF',
        color: 'black',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -6,
    }
}