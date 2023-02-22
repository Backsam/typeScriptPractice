
import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {

    const locationNow = useLocation();
    if (locationNow.pathname === "/") return null;


    return (
        <div className='header' id="nav">
            <div className='logo'>
            <Link to="/" style={{ textDecoration: "none" }}><p>TaxPortal</p></Link>
            </div>

            <div className='nav_menu'>
                <ul>
                    <li>뉴스</li>
                    <li>세금계산기</li>
                    <li>세무사 추천</li>
                    <li>마이페이지</li>
                </ul>
            </div>
        </div>
    )
}