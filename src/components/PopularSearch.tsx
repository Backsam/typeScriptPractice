import React, { Component } from 'react';

import styled from 'styled-components';
import Board from './../pages/Board';
import { useState } from 'react';

interface Props{
    data : Array<any>;
}

export default class PopularSearch extends React.Component<Props> {
    render() {
        
        const data = this.props.data;
        console.log(data);

        const showData = data.map((item, idx) =>{
            return(
                <li><label>{(idx+1).toString().padStart(2,'0')}</label>{item.keyword}</li>
            )
        })

        return (
            <Box>
                <Header>
                    <label>인기검색어 순위</label>
                    <p>2023/01/02</p>
                </Header>
                <Content>
                    <ul>
         
                        {
                            showData
                        }
                        {/* <li><label>01</label>1</li>
                        <li><label>02</label>1</li>
                        <li><label>03</label>1</li>
                        <li><label>04</label>1</li>
                        <li><label>05</label>1</li>
                        <li><label>06</label>1</li>
                        <li><label>07</label>1</li>
                        <li><label>08</label>1</li>
                        <li><label>09</label>1</li>
                        <li><label>10</label>1</li> */}
                    </ul>
                </Content>
            </Box>
        )
    }
}

const Box = styled.div`
    width: 100%;
    background-color: white;
    color: black;
    box-sizing: border-box;
    border: 1px solid #55DFF5;;
    border-radius: 15px;
    overflow: hidden;

    margin-top: 30px;
`

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 17px;
    font-weight: bold;
    background-color: #F4F8FD;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: relative;
    box-sizing: border-box;
    label{
        background: rgb(24,188,255); background: linear-gradient(90deg, rgba(24,188,255,1) 0%, rgba(48,132,255,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    }

    p{
        font-size: 7px;
    }
`

const Content = styled.div`
    font-size: 16px;
    li{
        margin: 15px 0;
        padding: 10px 30px;
    }

    li:not(:last-child){
        border-bottom: 1px solid #55DFF5;
    }

    label{
        margin-right: 30px;
        font-weight: bold;
        background: rgb(24,188,255); background: linear-gradient(90deg, rgba(24,188,255,1) 0%, rgba(48,132,255,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    }
`