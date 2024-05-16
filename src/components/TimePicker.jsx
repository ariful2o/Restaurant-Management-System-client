import React from 'react'
import TimeField from 'react-simple-timefield';

class TimePicker extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            time: '12:34'
        };

        this.onTimeChange = this.onTimeChange.bind(this);


    }

    onTimeChange(event, time) {
        this.setState({ time });
    }

    render() {
        const { time } = this.state;

        return (
            // <div className='col-span-2'>
                <TimeField style={{
                    border: '1px solid #FFFFFF',
                    gridColumn: 2,
                    padding: '10px',
                    paddingTop: '4px',
                    paddingBottom: '28px',
                    backgroundColor: '#292E36',
                    width: '100%',
                }} value={time} onChange={this.onTimeChange} />
            // </div>
        );
    }
}
export default TimePicker;