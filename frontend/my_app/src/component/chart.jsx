import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';

const Chart = () => {
  const chartRef = useRef(null);
//  const x=useSelector((store)=>{store.task});

  useEffect(() => {
    const data = 
    
    [
      { label: "Shreya", value: 1 },
      { label: "Ganesh", value: 1 },
      { label: "Ravi", value: 1 }
    ];

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select(chartRef.current)
                  .attr("width", width)
                  .attr("height", height)
                  .append("g")
                  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const arc = d3.arc()
                  .innerRadius(0)
                  .outerRadius(radius);

    const pie = d3.pie()
                  .value(d=>d.value)
                  .sort(null);

    const path = svg.selectAll("path")
                    .data(pie(data))
                    .enter()
                    .append("path")
                    .attr("d", arc)
                    .attr("fill", d => color(d.data.label));

    const legend = svg.selectAll(".legend")
                      .data(pie(data))
                      .enter()
                      .append("g")
                      .attr("class", "legend")
                      .attr("transform", (d, i) => {
                        const legendHeight = 18;
                        const offset = legendHeight * data.length / 2;
                        const horz = -2 * legendHeight;
                        const vert = i * legendHeight - offset;
                        return `translate(${horz},${vert})`;
                      });

    legend.append("rect")
          .attr("width", 15)
          .attr("height", 15)
          .attr("fill", d => color(d.data.label));

    legend.append("text")
          .attr("x", 18)
          .attr("y", 9)
          .text(d => d.data.label);
  }, []);

  return <svg ref={chartRef}></svg>;
};

export default Chart;
