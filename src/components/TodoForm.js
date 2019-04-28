import React, { useState } from 'react';

import TextForm from './Forms/TextForm';
import RadioForm from './Forms/RadioForm';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

const TodoForm = (props) => {

    const priorityLabels = {
        high: "高い",
        medium: "普通",
        low: "低い",
    }

    const initial = { title: '', priority: 'medium' };

    const [todo, setTodo] = useState(initial);

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(todo);
        setTodo(initial);
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid
                container
                // spacing={16}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={8}>
                    <TextForm
                        label={props.label}
                        placeholder={props.placeholder}
                        onChange={e => setTodo({ ...todo, title: e.target.value })}
                        value={todo.title}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <RadioForm
                        legend="優先度"
                        labels={Object.entries(priorityLabels)}
                        value={todo.priority}
                        onChange={e => setTodo({ ...todo, priority: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Button fullWidth variant="contained" color="primary" type="submit">add</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default TodoForm;