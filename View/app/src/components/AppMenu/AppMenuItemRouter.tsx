﻿import React, { forwardRef } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { NavLink, NavLinkProps } from 'react-router-dom';


export interface AppMenuRouterProps {
    className?: string
    link?: string | null
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const AppMenuItemRouter: React.FC<AppMenuRouterProps> = props => {
    const { className, link, onClick, children } = props

    if (!link || typeof link !== 'string') {
        return (
            <ListItem
                button
                className={className}
                children={children}
                onClick={onClick}
            />
        )
    }

    return (
        <ListItem
            button
            className={className}
            children={children}
            component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
            to={link}
        />
        
        )
}

export default AppMenuItemRouter;