import React, { Component } from 'react'
import SearchBar from './../components/SearchBar';
import styled from 'styled-components';

export default class Main extends Component {
  render() {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>):void => { 
        const {name, value} = e.target;
        console.log(value);
    }
    return (
      <div className="main">
        <div className='top'>

        </div>
        <div className='center'>
            <div>
                <SearchBar id="Search_box" name='Search_box'/>
            </div>
        </div>
        <div className='bottom'>

        </div>
      </div>
    )
  }
}