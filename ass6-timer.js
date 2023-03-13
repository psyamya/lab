import React, { Component } from "react";
import './ass6.css';
export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count2: 0,
            count3: 0,
            item:"AM",
        };

    }
    incre = () => {

        this.setState({ count1: this.state.count1 + 1 });
        this.setState({ count2: this.state.count2 + 1 });
        this.setState({ count3: this.state.count3 + 1 });
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ count1: this.state.count1 + 1 });
        }, 3600000);
        setInterval(() => {
            this.setState({ count2: this.state.count2 + 1 });
        }, 60000);
        setInterval(() => {
            this.setState({ count3: this.state.count3 + 1 });
        }, 1000);
    }
    componentDidUpdate() {
        if (this.state.count1 === 12) {
            this.state.count1 = 0
            this.state.item="PM"
        }
        if (this.state.count2 === 60) {
            this.state.count2 = 0
        }
        if (this.state.count3 === 60) {

            this.state.count3 = 0
        }
    }
    render() {
        return (
            <>
            <center>
                <div class="flex-container">
                    <div>{this.state.count1}</div>
                    <div>:</div>
                    <div>{this.state.count2}</div>
                    <div>:</div>
                    <div>{this.state.count3}</div>
                    
                    <div>{this.state.item}</div>
                </div></center>
            </>
        );
    }
}