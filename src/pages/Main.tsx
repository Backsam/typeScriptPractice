import React, { Component } from 'react'
import SearchBar from './../components/SearchBar';
import styled from 'styled-components';
import { useRef, useEffect } from 'react';
export default class Main extends Component {
  render() {
    
    return (
      <div className="main">
        <div className='top'>

        </div>
        <div className='center'>
            <span>
            </span>

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
