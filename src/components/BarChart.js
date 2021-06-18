import React, { Component } from 'react';
import * as d3 from 'd3';
import './viz.scss';

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-template */
/* eslint-disable no-multi-spaces */

class BarChart extends Component {
  componentDidMount() {
    // const data = [2, 4, 2, 6, 8];
    // const data = { nodes: [2, 4, 2, 6, 8] };
    // const data = {
    //   nodes: [{ id: 2 }, { id: 4 }, { id: 2 }, { id: 6 }, { id: 8 }],
    //   links: [{ source: 1, target: 2 }, { source: 1, target: 5 }, { source: 1, target: 6 }, { source: 2, target: 3 }, { source: 2, target: 7  }, { source: 3, target: 4 }, { source: 8, target: 3 }, { source: 4, target: 5 }, { source: 4, target: 9 }, { source: 5, target: 10 }],
    // };
    const data = {
      nodes: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D'  }, { id: 5, name: 'E'  }, { id: 6, name: 'F' }, { id: 7, name: 'G' }, { id: 8, name: 'H' }, { id: 9, name: 'I' }, { id: 10, name: 'J' }],
      links: [{ source: 1, target: 2 }, { source: 1, target: 5 }, { source: 1, target: 6 }, { source: 2, target: 3 }, { source: 2, target: 7  }, { source: 3, target: 4 }, { source: 8, target: 3 }, { source: 4, target: 5 }, { source: 4, target: 9 }, { source: 5, target: 10 }],
    };
    // const data =       {
    //   nodes: [
    //     {
    //       id: 1,
    //       name: 'A',
    //     },
    //     {
    //       id: 2,
    //       name: 'B',
    //     },
    //     {
    //       id: 3,
    //       name: 'C',
    //     },
    //     {
    //       id: 4,
    //       name: 'D',
    //     },
    //     {
    //       id: 5,
    //       name: 'E',
    //     },
    //     {
    //       id: 6,
    //       name: 'F',
    //     },
    //     {
    //       id: 7,
    //       name: 'G',
    //     },
    //     {
    //       id: 8,
    //       name: 'H',
    //     },
    //     {
    //       id: 9,
    //       name: 'I',
    //     },
    //     {
    //       id: 10,
    //       name: 'J',
    //     },
    //   ],
    //   links: [

    //     {
    //       source: 1,
    //       target: 2,
    //     },
    //     {
    //       source: 1,
    //       target: 5,
    //     },
    //     {
    //       source: 1,
    //       target: 6,
    //     },

    //     {
    //       source: 2,
    //       target: 3,
    //     },
    //     {
    //       source: 2,
    //       target: 7,
    //     },

    //     {
    //       source: 3,
    //       target: 4,
    //     },
    //     {
    //       source: 8,
    //       target: 3,
    //     },
    //     {
    //       source: 4,
    //       target: 5,
    //     },

    //     {
    //       source: 4,
    //       target: 9,
    //     },
    //     {
    //       source: 5,
    //       target: 10,
    //     },
    //   ],
    // };
    this.drawNetwork(data);
  }

  //   drawBarChart(data) {
  //     const canvasHeight = 400;
  //     const canvasWidth = 600;
  //     const scale = 20;
  //     const svgCanvas = d3.select(this.refs.canvas)
  //       .append('svg')
  //       .attr('width', canvasWidth)
  //       .attr('height', canvasHeight)
  //       .style('border', '1px solid black');

  //     svgCanvas.selectAll('rect')
  //       .data(data).enter()
  //       .append('rect')
  //       .attr('width', 40)
  //     //   .attr('height', 40)
  //       .attr('height', function (datapoint) { return datapoint * scale; })
  //     //   .attr('height', (datapoint) => { datapoint * scale; })
  //       .attr('fill', 'orange')
  //       .attr('x', (datapoint, iteration) => { iteration * 45; })
  //       .attr('y', (datapoint) => { canvasHeight - datapoint * scale; });
  //   }

  drawNetwork(data) {
    // set the dimensions and margins of the graph
    const margin = {
      top: 10, right: 30, bottom: 30, left: 40,
    };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const canvasHeight = 600;
    const canvasWidth = 400;
    const scale = 20;
    const svg = d3.select(this.refs.canvas)
      .append('svg')
      .attr('width', canvasHeight)
      .attr('height', canvasWidth)
      .style('border', '1px solid black');

    // svg.selectAll('rect')
    //   .data(data.nodes).enter()
    //   .append('rect')
    //   .attr('width', 40)
    //   .attr('height', 40)
    // .attr('height', function (datapoint) { return datapoint.id * scale; })
    // .attr('fill', 'orange');
    // .attr('x', (datapoint, iteration) => { iteration * 45; })
    // .attr('y', (datapoint) => { canvasHeight - datapoint.id * scale; });

    // // const node = svg
    const node = svg.selectAll('circle')
      .data(data.nodes).enter()
      .append('circle')
      // .attr('width', 40)
      // .attr('height', 40)
      .attr('cx', canvasHeight / 2)
      .attr('cy', canvasWidth / 2)
      .attr('r', 20)
      .style('fill', '#69b3a2');

    const link = svg.selectAll('line')
      .data(data.links).enter()
      .append('line')
      // .attr('x1', 50)
      // .attr('y1', 50)
      // .attr('x2', (datapoint, iteration) => { iteration * 45; })
      // .attr('y2', (datapoint) => { canvasHeight - datapoint.id * scale; })
      .style('stroke', '#aaa');

    // Let's list the force we wanna apply on the network
    const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
      .force('link', d3.forceLink()                               // This force provides links between nodes
        .id(function (d) { return d.id; })                     // This provide  the id of a node
        .links(data.links))                                    // and this the list of links
      .force('charge', d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
      .force('center', d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
      .on('end', ticked);

    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
      link
        .attr('x1', function (d) { return d.source.x; })
        .attr('y1', function (d) { return d.source.y; })
        .attr('x2', function (d) { return d.target.x; })
        .attr('y2', function (d) { return d.target.y; });
      node
        .attr('cx', function (d) { return d.x + 6; })
        .attr('cy', function (d) { return d.y - 6; });
    }
  }

  render() { return <div ref="canvas" />; }
}

export default BarChart;
