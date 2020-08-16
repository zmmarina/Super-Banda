import React, { Component } from 'react';
import Counter from "../components/Counter/Counter";

import css from './band.module.css';

export default class Band extends Component {
    constructor(){
        super();

        this.state ={
            bandName: "Legião Urbana",
            bandMembers: [
                {
                    id: 1, 
                    name: "Renato Russo",
                    role: "Singer"
                },
                {
                    id: 2, 
                    name: "Dado Villa Lobos",
                    role: "Guitarist"
                },
                {
                    id:3, 
                    name: "Marcelo Bonfá",
                    role: "Drummer"
                }
            ]
        }
    }
    render() {
        const { bandName, bandMembers } = this.state;
        return (
            <div className={css.container}>
                <h2 className={css.title}>{bandName} - Super votação</h2>
                <ul className={css.members}>
                    {bandMembers.map(({id, name, role})=>{
                        return (
                            <li key={id}>{name} - {role} <Counter /> </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
