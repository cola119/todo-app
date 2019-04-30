import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
import HighIcon from '@material-ui/icons/NewReleases';
import MediumIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const get_date = (timestamp) => {
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

    const doneStyle = {
        color: "gray",
        textDecoration: "line-through"
    }

    return (
        <List component="nav">
            <Divider />
            {props.todos.map(todo => (
                <ListItem
                    key={todo.id}
                    divider button
                    onClick={() => props.changeTodoState(todo.id)}
                >
                    <ListItemIcon>
                        {isCompleted(todo) ? <CheckIcon /> : todo.priority === 'high' ? <HighIcon color="secondary" /> : <MediumIcon />}
                    </ListItemIcon>
                    <ListItemText
                        inset={true}
                        primary={
                            <span style={isCompleted(todo) ? doneStyle : {}}>{todo.title}</span>
                        }
                        secondary={
                            <>
                                {get_date(todo.created_at)}<br />
                                {/* {todo.deadline} */}
                            </>
                        }
                    />
                    <ListItemSecondaryAction>
                        {isCompleted(todo) &&
                            <IconButton onClick={() => props.deleteTodo(todo.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;