import React, {Component} from 'react';
import JobItem from './JobItem'

class Jobs extends Component {    
    render() {
        console.log(this.props.jobs);
        return this.props.jobs.map((job) => (
            <JobItem job={job} />
        ));
    }
}

export default Jobs;