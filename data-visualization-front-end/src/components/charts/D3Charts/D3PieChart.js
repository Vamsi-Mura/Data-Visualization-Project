import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { aggregateByKey } from '../../../helper.js/chartHelper';
// import { aggregateByKey } from './helpers';

const D3PieChart = ({allData, itemKey}) => {
  const svgRef = useRef();
  const data = aggregateByKey(allData, itemKey); // Aggregated data

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous rendering

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie().value(([, value]) => value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('background', '#f0f0f0')
      .style('padding', '5px')
      .style('border-radius', '5px')
      .style('display', 'none');

    g.selectAll('path')
      .data(pie(Object.entries(data)))
      .join('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i))
      .on('mouseover', (event, d) => {
        tooltip.style('display', 'block').html(`<b>${d.data[0]}</b>: ${d.data[1]}`);
      })
      .on('mousemove', (event) => {
        tooltip
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 10 + 'px');
      })
      .on('mouseout', () => tooltip.style('display', 'none'))
      .transition()
      .duration(1000)
      .attrTween('d', function (d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t));
        };
      });
  }, [data]);

  return <svg ref={svgRef} width={400} height={400} />;
};

export default D3PieChart;


