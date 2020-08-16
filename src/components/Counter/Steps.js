import React, { Component } from 'react';

import css from './counter.module.css';

export default class Steps extends Component {
    render() {
        return (
            <div>
                <span className={css.steps}>(Total de votos: {this.props.steps} )</span> 
            </div>
        )
    }
}
