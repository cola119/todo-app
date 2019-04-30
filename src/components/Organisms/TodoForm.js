import React, { useState } from 'react';

import TextForm from '../Molecules/Forms/TextForm';
import RadioForm from '../Molecules/Forms/RadioForm';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const TodoForm = (props) => {


    const [todo, setTodo] = useState(props.formInitial);

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(todo);
        setTodo({ ...todo, title: '' });
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <TextForm
                        label={props.label}
                        placeholder={props.placeholder}
                        onChange={e => setTodo({ ...todo, title: e.target.value })}
                        value={todo.title}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <RadioForm
                        legend="期限"
                        labels={Object.entries(props.deadlineLabels)}
                        value={todo.deadline}
                        onChange={e => setTodo({ ...todo, deadline: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <RadioForm
                        legend="優先度"
                        labels={Object.entries(props.priorityLabels)}
                        value={todo.priority}
                        onChange={e => setTodo({ ...todo, priority: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary" type="submit">add</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default TodoForm;