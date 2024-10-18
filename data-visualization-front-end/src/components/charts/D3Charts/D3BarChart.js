import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { aggregateByKey } from '../../../helper.js/chartHelper';

const D3BarChart = ({allData, itemKey}) => {
  const svgRef = useRef();
  const data = aggregateByKey(allData, itemKey); // Aggregated data

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear the SVG before re-rendering

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const x = d3
      .scaleBand()
      .domain(Object.keys(data))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(Object.values(data))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g) =>
      g.attr('transform', `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));

    const yAxis = (g) =>
      g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    svg
      .selectAll('.bar')
      .data(Object.entries(data))
      .join('rect')
      .attr('class', 'bar')
      .attr('x', ([key]) => x(key))
      .attr('y', ([, value]) => y(value))
      .attr('height', ([, value]) => y(0) - y(value))
      .attr('width', x.bandwidth())
      .attr('fill', 'steelblue');
  }, [data]);

  return <svg ref={svgRef} width={600} height={400} />;
};

export default D3BarChart;
