import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

interface StyledInput {
  name?: string,
  id: string,
  onChange?: React.ChangeEventHandler,
  placeholder?: string,
  value?: string
}

interface IInputValue {
  value: string;
}

interface IDropDownState {
  state: boolean;
}

interface show {
  state: boolean;
}

const testArray = [
  "사과", "사진", "사장님", "나사", "바나나", "망고", "포도", "귤", "수박", "배", "파인애플", "자두", "복숭아", "체리", "레몬", "오렌지", "딸기", "무화과", "앵두", "살구", "감", "석류"
]

export default function SearchBar(props: StyledInput) {
  const [inputValue, setInputValue] = useState<IInputValue>({ value: '' });
  const [dropDownState, setDropDownState] = useState<IDropDownState>({ state: false });
  const [dropDownItemList, setDropDownItemList] = useState<Array<string>>([]);
  const [matchItem, setMatchItem] = useState<Array<string>>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ value: value.replace(/ /g, "") });
  }

  const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === 'Enter'){
      axios.get(`${process.env.REACT_APP_TEST_URL + "/search?q=" + inputValue.value}`)
      .then((res) =>{
        console.log(res.data.message);
      })
      .catch((error) =>{
        console.log(error);
      })
    }
  }

  useEffect(() => {
    console.log(inputValue.value);
    if (inputValue.value !== "") {
      setDropDownState({ state: true });
    } else {
      setDropDownState({ state: false });
    }
  }, [inputValue])

  useEffect(() => {
    if (dropDownState.state) {
      console.log(dropDownState.state)
      axios.get(`${process.env.REACT_APP_TEST_URL + "/autoComplete?value=" + inputValue.value}`)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          const tempArr: Array<string> = []
          if (data != null) {
            data.map((item: any, idx: number) => {
              tempArr.push(item.keyword)
              setDropDownItemList([...tempArr]);
              setMatchItem(() => [...dropDownItemList.filter(item => item.startsWith(inputValue.value))]);
            })
          } else {
            console.log(res.data.message)
            setMatchItem([res.data.message]);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      console.log(dropDownState.state);
    }
  }, [dropDownState, inputValue])


  const itemList = matchItem.map((item, idx) => (
    <li key={idx}>{item}</li>
  )
  )





  return (
    <SearchBox>
      <div id="inputBox">
        <Query id={props.id} name={props.name} type="text" placeholder={props.placeholder} onChange={onChange} onKeyDown={onKeyPress} />
      </div>
      <Icon className="search_icon" />
      <AutoCompleteList show={dropDownState.state}>
        <ul>
          {itemList}
        </ul>
      </AutoCompleteList>
    </SearchBox>
  )
}





const SearchBox = styled.div`
  position: relative;
  width: 650px;
  height: 48px;
`
const Query = styled.input`
  width: 520px;
  height: 100%;
  position: absolute;
  padding-inline-start: 90px;
  padding-inline-end: 40px;
  font-size: 18px;
  top: 0;
  bottom: 0;
  border: none;
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius : 10px; 
`

const Icon = styled.img`
  position: absolute;
  width: 30px;
  height: 50%;
  top: 12px;
  bottom: 0;
  left: 25px;
  content: url("/icon/search.svg");
`

const AutoCompleteList = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "inline" : "none")};
  position: absolute;
  top: 40px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 25px;
  box-sizing  : border-box;
  border-radius: 0 0 10px 10px;
  background-color: white;
  font-size: 18px;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  li{
    padding: 10px 0;
    padding-left: 90px;
  }

  li:hover{
    background-color: lightgray;
  }
`
