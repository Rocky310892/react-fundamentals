import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const ApexChartFunctionComponent = () => {

    const [categories, setCategories] = useState([])
    const [data, setData] = useState([])

    // const [options, setObject] = useState({
    //     chart: {
    //       id: "basic-bar"
    //     },
    //     xaxis: {
    //       categories: []
    //     }
    // })

    // const [series, setSeries] = useState([
    //     {
    //       name: "series-1",
    //       data: []
    //     }
    //   ])

      useEffect(() => {
            const age = [];
            const salary =[];

          axios.get("https://dummy.restapiexample.com/api/v1/employees")
          .then(response=>{
              console.log("response", response)
              response.data.data.map(item=>{
                  console.log("item", item);
                  age.push(item.employee_age);
                  salary.push(item.employee_salary);
            })
            setCategories(salary);
            setData(age)
            // setObject({
            //     chart: {
            //       id: "basic-bar"
            //     },
            //     xaxis: {
            //       categories: salary
            //     }
            // })
            // .setSeries([{
            //       name: "series-1",
            //       data: age
            // }])
              console.log("age", age, salary)
          })
          .catch(error=>{
              console.log("error", error)
          })
      }, [])
      

  return (
   <>
     {/* <Chart
        options={options}
        series={series}
        type="line"
        width="1200"
        height="500"
    /> */}
    <Chart
        options={{
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: categories
            }
        }}
        series={[
            {
              name: "series-1",
              data: data
            }
          ]}
        type="line"
        width="1200"
        height="500"
    />
   </>
  )
}

export default ApexChartFunctionComponent