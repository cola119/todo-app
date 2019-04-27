import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {
    return (
        <List>
            {props.todos.map(todo => (
                <ListItem key={todo.id}>
                    <ListItemText primary={todo.title} />
                    <ListItemSecondaryAction>
                        <Button
                            color={todo.state === 'complete' ? "default" : "secondary"}
                            variant={todo.state === 'complete' ? "outlined" : "contained"}
                            onClick={() => props.changeTodoState(todo.id)}
                        >
                            {todo.state === 'complete' ? "Done" : "完了にする"}
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