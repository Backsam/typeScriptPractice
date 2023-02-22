import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header';

export class BoardItem extends Component {
    render() {
        return (
            <ItemBox>
                <div className="item_img_box">

                </div>
                <div className="item_content">
                    <div className="item_title">
                    <p>Lorem Ipsum is simply   Lorem Ipsum is simply   Lorem Ipsum is simply   Lorem Ipsum is simply   Lorem Ipsum is simply   Lorem Ipsum is simply   Lorem Ipsum is simply   Lorem Ipsum is simpl</p>
                    </div>
                    <div className="item_summary">
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                         you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                         making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
                         to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.   
                          
                    </p>
                    </div>
                    <div className="item_footer">
                        <p>{"홍길동"} 기자</p>
                        <p>{"2023/02/01"}</p>
                    </div>
                </div>
            </ItemBox>
        )
    }
}

export default BoardItem


const ItemBox = styled.div`
    height: 150px;
    background-color: white;
    margin-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: relative;
    color: black;

    :hover{
        color: rgba(24,188,255,1);
    }

    .item_img_box{
        width: 220px;
        height: 120px;
        background-color: #444;
    }

    .item_content{
        width: 85%;
        height: 120px;
        background-color: transparent;
        margin-left: 20px;
    }

    .item_title{
        display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-bottom: 2px;
	font-size: 24px;
	font-weight: bold;
    }

    .item_summary{
        display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	margin-bottom: 5px;
	margin-top: 5px;
	margin-bottom: 10px;
    font-size: 14px;
	overflow: hidden;
	text-align: left;
	text-overflow: ellipsis;
    }

    .item_footer{
        position: absolute;
        bottom: 0;
        right: 0;

        p{
            display: inline;
            font-size: 11px;
            color : black
        }

        p:first-child{
            margin-right: 10px;
            padding-right : 10px;
            border-right: 1px solid black;
        }
    }
`