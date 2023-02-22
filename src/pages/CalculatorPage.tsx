import React from 'react'
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export default function Calculator() {
  const [sequence, setSequence] = useState(1);

  //양도의 종류
  const [state, setState] = useState(0);

  //거주기간
  const [select, setSelect] = useState(0);

  //양도가액, 취득가액, 필요경비
  const [cost, setCost] = useState({
    transferValue: 0,
    AcquisitionValue: 0,
    requiredValue: 0,
  })

  //
  const [inputPercentageStatus, setInputPercentageStatus] = useState(false);

  const [ownerPer, setOwnerPer] = useState(0);


  /* -------------- functions  -------------------*/

  useEffect(() => {
    console.log("1번 문항 : " + state)
    console.log("2번 문항 : " + select)
  }, [state, select])

  useEffect(() => {
    console.log("3번 문항 :" + JSON.stringify(cost));
  }, [cost])

  useEffect(() => {
    console.log("sequence : " + sequence)
  }, [sequence])

  useEffect(() =>{
    console.log("percentage : " + ownerPer)
  },[ownerPer])

  //(1)양도 종류 선택 이벤트
  const handOverType = (e: any) => {
    setState(() => e);
    if (e !== 0) {
      setSequence(2);
    }
  }


  //(2)거주기간 선택 처리
  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  };

  //(3)가액, 경비 입력 처리
  const setValue = (e:any) =>{
    const {name , value} = e.target;
    setCost({
      ...cost,
      [name] : value
    })
  }

  //(3.1)입력된 금액 -> 원 단위 변환
  const numberToWon = (e:number) =>{
    const value = e.toString();
    const unitWords = ["","만","억","조","경"]
    let tempArr = [];
    let resStr = "";

    for(var i = 0; i < value.length; i++){
      var temp = (e % Math.pow(10000, i+1)) / Math.pow(10000, i);
      temp = Math.floor(temp)
      if(temp > 0){
        tempArr[i] = temp;
      }
    }

    for (var j = 0; j < unitWords.length; j++){
      if(!tempArr[i]) continue;
      resStr = tempArr[i].toString() + unitWords[i] + resStr;
    }
    
    console.log(tempArr)
    return resStr + "원"
  }

  //(4)소유 지분
  const ref = useRef<any>(null);

  const percentageSelect = (e:any) =>{
    const { target } = e;
    if(target.value === "yes"){
      setInputPercentageStatus(false);
      setOwnerPer(100);
    }else if(target.value === "no"){
      setInputPercentageStatus(true);
      setOwnerPer(ref.current.value);
    }
  }

  //(4)소유 지분 입력
  const setPerVal = (e:any) =>{
    const {name , value} = e.target;
    if(value <= 100){
      setOwnerPer(value);
      return;
    }
  }
  /* -------------- end -----------------*/





  const onClickBtn = () => {
    setSequence((sequence) => sequence + 1);
  }



  return (
    <div className='pt-5'>
      {
        sequence <= 2 &&
        <div className='box'>
          <div className='question'>
            <p>1. 양도의 종류는 어떤 것이 있습니까?</p>
          </div>
          <div className='answer'>
            <div className='form-radio'>
              <input type="radio" name="type" value="house" onChange={() => handOverType(1)} /> 주택
              <input type="radio" name="type" value="estate" onChange={() => handOverType(2)} /> 토지
              <input type="radio" name="type" value="store" onChange={() => handOverType(3)} /> 상가
            </div>
          </div>
        </div>
      }

      {
        sequence === 2 &&
        <div className='box'>
          <div className='question'>
            <p>2. 선택한 재산의 양도일자와 취득일자를 선택해주시기 바랍니다​.</p>

            양도일자<input type="text" />
            취득일자<input type="text" />

            <p></p>
            거주기간
            <select className="w150" onChange={handleSelect}>
              <option value="1" >2년 ~ 3년 미만</option>
              <option value="2" >3년 ~ 4년 미만</option>
              <option value="3" >4년 ~ 5년 미만</option>
              <option value="4" >5년 ~ 6년 미만</option>
              <option value="5" >6년 ~ 7년 미만</option>
              <option value="6" >7년 ~ 8년 미만</option>
              <option value="7" >8년 ~ 9년 미만</option>
              <option value="8" >9년 ~ 10년 미만</option>
            </select>
          </div>
          <button onClick={onClickBtn}>다음 단계</button>
        </div>

      }


      {
        sequence <= 4 && sequence > 2 &&
        <div className='box'>
          <div className='question'>
            <p>3. 양도가액과 취득가액을 입력해주시기 바랍니다.</p>
            양도가액 <input type="text" name="transferValue" onChange={setValue}/><span>{numberToWon(cost.transferValue)}</span><p />
            취득가액 <input type="text" name="AcquisitionValue" onChange={setValue}/><span>{numberToWon(cost.AcquisitionValue)}</span><p />
            필요경비 <input type="text" name="requiredValue" onChange={setValue}/><span>{numberToWon(cost.requiredValue)}</span><p />
          </div>
          <button onClick={onClickBtn}>다음 단계</button>
        </div>
      }


      {
        sequence === 4 && sequence > 2 &&
        <div className='box'>
          <div className='question'>
            <p>4. 소유지분을 선택해주시기 바랍니다.</p>
            <input type="radio" name="percentage" value="yes" onChange={percentageSelect}/> 100%
            <input type="radio" name="percentage" value="no" onChange={percentageSelect}/> 100%가 아닌 경우
            <input type="text" disabled={!inputPercentageStatus} onChange={setPerVal} ref={ref}/>%
          </div>
          <button onClick={onClickBtn}>다음 단계</button>
        </div>
      }
    </div>
  )
}
