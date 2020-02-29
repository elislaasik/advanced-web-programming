import React from 'react';

export default class Task extends React.Component {
    constructor(props, context){
        super(props,context)
        this.hangleChange = this.hangleChange.bind(this)

    }
    hangleChange(e){ 
        if(!this.props.task.checked){
        
            const spanEl = document.createElement('span')
            spanEl.classList.add('goodJobText')
            spanEl.textContent = ' Good job!🌈🌈🌈'
            document.querySelector('.goodJob').appendChild(spanEl)
    
            setTimeout(()=>{
                    document.querySelector('span').remove()
            }, 2000)
        }
    }

    render() {
        return (
            <li>
                <input name={this.props.task.title} type="checkbox" checked={this.props.task.done} onChange={this.hangleChange}
                        /> 
                     <label htmlFor={this.props.task.title}> {this.props.task.title}</label>
            </li>
        )
    }
}

