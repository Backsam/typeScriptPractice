import React, { useState } from 'react'

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

function TodoList() {
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

    const onSubmit = (e)

    return (
        <div>TodoList</div>
    )
}

export default TodoList