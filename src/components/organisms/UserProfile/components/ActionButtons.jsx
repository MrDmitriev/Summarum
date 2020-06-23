import React, { Component } from 'react'
import { Button } from 'components'


export default class ActionButtons extends Component {
    render() {
        const BUTTONS_VALUES = ['hire', 'write me', 'call me'];
        return(
            <div className="kt-widget__action">
                <Button 
                    btnStyle={'label-success'}
                    size={'sm'}
                    value={'Download CV'}
                />
                {BUTTONS_VALUES.map((item) => {
                    return <Button btnStyle={'brand'} size={'sm'} value={item} key={item} />
                })}
            </div>
        )
    }
}