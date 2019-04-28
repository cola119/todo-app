import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import HighIcon from '@material-ui/icons/NewReleases';
import MediumIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const get_date = (_timestamp) => {
    const _d = new Date(_timestamp);
    const Y = _d.getFullYear();
    const m = ("0" + (_d.getMonth() + 1)).slice(-2);
    const d = ("0" + _d.getDate()).slice(-2);
    const H = ("0" + _d.getHours()).slice(-2);
    const i = ("0" + _d.getMinutes()).slice(-2);
    // const s = ("0" + _d.getSeconds()).slice(-2);
    return `${Y}/${m}/${d} ${H}:${i}`;
    // return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}

const TodoList = (props) => {
    return (
        <List component="nav">
            {props.todos.map(todo => (
                <ListItem key={todo.id} divider >
                    <ListItemIcon>
                        {todo.priority === 'high' ? <HighIcon /> : <MediumIcon />}
                    </ListItemIcon>
                    <ListItemText inset={true}
                        primary={
                            todo.title
                        }
                        secondary={
                            get_date(todo.id)
                        }
                    />
                    <ListItemSecondaryAction>
                        <Button
                            color={todo.state === 'complete' ? "default" : "secondary"}
                            variant={todo.state === 'complete' ? "text" : "outlined"}
                            onClick={() => props.changeTodoState(todo.id)}
                        >
                            {todo.state === 'complete' ? "Done" : "完了"}
                        </Button>
                        <IconButton onClick={() => props.deleteTodo(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TodoList;