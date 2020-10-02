import React, { Component } from 'react';
import "./TodoListItem.css";

export default class TodoListItem extends Component {

    // state = {
    //     done: false,
    //     important: false
    // };
    // onLabelClick = () => {
    //     this.setState(({ done }) => {
    //         return {
    //             done: !done
    //         }
    //     });
    // }
    // onMarkImportant = () => {
    //     this.setState(({ important }) => {
    //         return {
    //             important: !important
    //         };
    //     });
    // };

    render() {
        const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }
        if (important) {
            classNames += " important";
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                    <i className="fa fa-star" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash" />
                </button>
            </span>
        );
    }
}
