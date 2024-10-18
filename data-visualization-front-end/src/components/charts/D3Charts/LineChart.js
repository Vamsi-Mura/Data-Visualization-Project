import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({data}) => {
  const svgRef = useRef();
  
  useEffect(() => {

    
    
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous rendering

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const years = data.map((d) => d.start_year || 'Unknown');
    const relevance = data.map((d) => d.relevance || 0);

    const x = d3
      .scalePoint()
      .domain(years)
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(relevance)])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d, i) => x(years[i]))
      .y((d) => y(d))
      .curve(d3.curveMonotoneX);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg
      .append('path')
      .datum(relevance)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg
      .selectAll('circle')
      .data(relevance)
      .join('circle')
      .attr('cx', (d, i) => x(years[i]))
      .attr('cy', (d) => y(d))
      .attr('r', 4)
      .attr('fill', 'steelblue')
      .on('mouseover', (event, d) => {
        d3.select(event.target).attr('r', 6).attr('fill', 'orange');
      })
      .on('mouseout', (event) => {
        d3.select(event.target).attr('r', 4).attr('fill', 'steelblue');
      });
  }, [data]);

  return <svg ref={svgRef} width={800} height={600} />;
};

export default LineChart;
