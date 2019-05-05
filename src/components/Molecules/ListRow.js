import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const ListRow = (props) => {
    return (
        <>
            <ListItem
                divider button
                onClick={props.onRowClick}
            >
                <ListItemIcon>
                    {props.leftIcon}
                </ListItemIcon>
                <ListItemText
                    inset={true}
                    primary={props.primaryText}
                    secondary={props.secondaryText}
                />
                <ListItemSecondaryAction>
                    {props.secondaryAction}
                </ListItemSecondaryAction>
            </ListItem>
        </>
    );
};

ListRow.propTypes = {
    onRowClick: PropTypes.func.isRequired,
    leftIcon: PropTypes.element.isRequired,
    primaryText: PropTypes.element.isRequired,
    secondaryText: PropTypes.string.isRequired,
    secondaryAction: PropTypes.any.isRequired,
};

export default ListRow;