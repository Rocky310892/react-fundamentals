import React, { Component } from 'react';
import { Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import axios from 'axios';

export default class ApexChartClassComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: []
            }
          },
          series: [
            {
                name: "Salary",
                data: [],
                color: '#f44336'
            },
            {
                name: "Age",
                data: [],
                color: '#e91e63'
            }
          ]
        };
      }


    async componentDidMount(){
        const salary = [];
        const age = [];
        const emp_name = [];
         await axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then(response=>{
                 console.log("Response", response.data.data);
                for(const obj of response.data.data){
                    // console.log("Obj", obj)
                    salary.push(obj.employee_salary);
                    age.push(obj.employee_age);
                    emp_name.push(obj.employee_name)
                }
                console.log("Salary", salary)

                this.setState({
                    options: {
                        chart: {
                          id: "basic-bar"
                        },
                        xaxis: {
                            categories: emp_name
                        }
                    },
                    series: [
                        {
                            name: "Salary",
                            data: salary,
                            color: '#f44336'
                        }
                    ]
                })
            })
            .catch(error=>{
                console.log("Error", error)
            })
      }

    render() {
        return (
        <div>
            <Grid container flex>
                <Grid item xs={6}>
                    <h3>Bar ApexChart</h3>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width={1400}
                        height={400}
                        />
                </Grid>
            </Grid>
        </div>
        )
    }
}
