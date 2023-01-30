import React, { useState, useEffect } from 'react'

interface todoItem {
    item: string
}

interface ItodoItems {
    idx: number,
    item: string;
    isDelete: boolean,
    onDelete?: Function
}

interface ItodoList {
    todoItems: ItodoItems[],
}

export default function TodoList() {
    const [todoItem, setTodoItem] = useState<todoItem>({
        item : ''
    });

    const [todoList, setTodoList] = useState<ItodoItems>({
        idx :0,
        item :'',
        isDelete : false
    })

    const [todoData, setTodoData] = useState<ItodoList>({
        todoItems: [todoList],
    })

    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
        setTodoList({
            idx : todoList.idx+1,
            item : todoItem.item,
            isDelete : false
        })
    }

    useEffect(() =>{
        setTodoItem({
            item : ''
        })
        
        setTodoData({
            todoItems : todoData.todoItems.concat(todoList)
        })
    },[todoList])


    const onChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        const {name, value} = e.target;
        setTodoItem({
            item : value
        })
    }
    
    const onDelete = (idx:number):void =>{
        setTodoData(({todoItems}) => ({
            todoItems: todoItems.filter(item => item.idx !== idx)
        }))
    }

    const TodoList = todoData.todoItems.map(
        (data, idx) =>(
            <React.Fragment key={idx}>
                <TodoItem
                    idx={data.idx}
                    item={data.item}
                    isDelete={data.isDelete}
                    onDelete={onDelete}
                />
            </React.Fragment>
        )
    )

    

    return (
        <div>
        <h2>할 일</h2>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" name='content' value={todoItem.item} onChange={onChange}/>
                    <button type='submit'>추가</button>
                </form>
            </div>
            <div>
                {TodoList}
            </div>
        </div>
    )
}

interface IList {
    idx:number,
    item:String,
    isDelete:boolean,
    onDelete:Function
}

export function TodoItem(props:IList) {
    const handleDelete = () =>{
        props.onDelete(props.idx)
    }
    return(
        <div>
            {props.idx !== 0 && !props.isDelete && (
                <div>
                    {props.item}
                    <span onClick={handleDelete}>삭제</span>
                </div>
            )}
        </div>
    )
}