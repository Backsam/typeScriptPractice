import React,{ useEffect, useState} from "react";
import SearchBar from './../components/SearchBar';
import { BoardItem } from './../components/BoardItem';
import PopularSearch from './../components/PopularSearch';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Board() {

    const[popularKeywordData, setPopularKeywordData] = useState<Array<Object>>([]);
    const[isLoading, setIsLoading] = useState<Boolean>(false);

    useEffect(() =>{
        axios.get(process.env.REACT_APP_TEST_URL + "/popular")
        .then(res =>{
            setIsLoading(true);
            setPopularKeywordData(() => res.data.data);
            setIsLoading(false);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    useEffect(()=>{
            console.log(popularKeywordData);
    },[popularKeywordData])


    return (
        <div className="board">
            {/* <div className="top">
                <SearchBar id="Search_box" name='Search_box' />
                <div id = "real_time_news">

                </div>
            </div> */}
            <div className="center">
                <div className="center_left">
                    <div className="news_header">
                        <label>기획뉴스</label>
                        <label>Special News</label>
                    </div>
                    <div id ="news_list">
                        <Link to="/" style={{ textDecoration: "none" }}><BoardItem/></Link>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                        <BoardItem/>
                    </div>
                </div>
                <div className="center_right">
                    <div className="btn page_btn">
                        내가 납부해야할 세액 알아보기
                    </div>
                    <div className="btn page_btn">
                        세무사 추천ㆍ매칭 서비스
                    </div>
                    <PopularSearch data={popularKeywordData}/>
                </div>
            </div>

        </div>
    )
}