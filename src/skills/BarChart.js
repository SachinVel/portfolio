import React, { Component } from 'react';
import Chart from "chart.js/auto";

export default class BarChart extends Component {


    constructor(props) {
        super(props);
    }

    chart;

    chartRef = React.createRef();

    componentDidUpdate(prevProps, prevState) {
        console.log("this.props.chartData : ",this.props.chartData);
        this.chart.data = this.props.chartData;
        this.chart.update();
    }

    componentDidMount() {
        let ctx = this.chartRef.current.getContext("2d");

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: this.props.chartData,
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        enabled: false
                    }
                },
                indexAxis: 'y',
                scales: {
                    x: {
                        min: 0,
                        max: 90,
                        ticks: {
                            callback(value) {
                                if (value == 30) {
                                    return "Beginner";
                                } else if (value == 60) {
                                    return "Intermediate";
                                } else if (value == 90) {
                                    return "Professional";
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    render() {
        return (
            <div className='skill-chart-container'>
                <canvas id="skill-chart" className="skill-chart" ref={this.chartRef} />
            </div>
        )
    }
}