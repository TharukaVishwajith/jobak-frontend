import React, {Component} from 'react';


class JobItem extends Component { 
    
    getStyle = () => {
        return {
            background: '#111',
            color: '#fff'
        }
    }

    render() {
        // console.log(this.props.job);
        return(
            <div style={this.getStyle()} key={this.props.job.id}>Job 1</div>
        );
    }
}

export default JobItem;