import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HighIcon from '@material-ui/icons/NewReleases';
import MediumIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

import ListRow from '../Molecules/ListRow';

const getDate = (timestamp) => {
    const _d = new Date(timestamp);
    const Y = _d.getFullYear();
    const m = ("0" + (_d.getMonth() + 1)).slice(-2);
    const d = ("0" + _d.getDate()).slice(-2);
    const H = ("0" + _d.getHours()).slice(-2);
    const i = ("0" + _d.getMinutes()).slice(-2);
    const s = ("0" + _d.getSeconds()).slice(-2);
    return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}

const TodoList = (props) => {
    const isCompleted = todo => todo.state === 'complete';
    const leftIcon = todo => isCompleted(todo) ? <CheckIcon /> : todo.priority === 'high' ? <HighIcon color="secondary" /> : <MediumIcon />;
    const doneStyle = {
        color: "gray",
        textDecoration: "line-through"
    }

    return (
        <List>
            <Divider />
            {props.todos.map(todo => (
                <ListRow
                    key={todo.id}
                    onRowClick={() => props.changeTodoState(todo.id)}
                    leftIcon={leftIcon(todo)}
                    primaryText={<span style={isCompleted(todo) ? doneStyle : {}}>{todo.title}</span>}
                    secondaryText={getDate(todo.created_at)}
                    secondaryAction={isCompleted(todo) &&
                        <IconButton onClick={() => props.deleteTodo(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            ))}
        </List>
    );
};

export default TodoList;