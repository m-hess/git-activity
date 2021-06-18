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
/* eslint-disable no-nested-ternary */

class ForceNetwork extends Component {
  componentDidMount() {
    // const data = {
    //   nodes: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D'  }, { id: 5, name: 'E'  }, { id: 6, name: 'F' }, { id: 7, name: 'G' }, { id: 8, name: 'H' }, { id: 9, name: 'I' }, { id: 10, name: 'J' }],
    //   links: [{ source: 1, target: 2 }, { source: 1, target: 5 }, { source: 1, target: 6 }, { source: 2, target: 3 }, { source: 2, target: 7  }, { source: 3, target: 4 }, { source: 8, target: 3 }, { source: 4, target: 5 }, { source: 4, target: 9 }, { source: 5, target: 10 }],
    // };
    const data = {
      nodes: [{
        id: 1, name: 'Addison Chen', x: 469, y: 410,
      }, {
        id: 2, name: 'Anara Myrzabekova', x: 469, y: 410,
      }, {
        id: 3, name: 'Bryan Choy', x: 469, y: 410,
      }, {
        id: 4, name: 'Denise Zhong', x: 469, y: 410,
      }, {
        id: 5, name: 'Eshan Bhargava', x: 469, y: 410,
      }, {
        id: 6, name: 'Evan Chang', x: 469, y: 410,
      }, {
        id: 7, name: 'Eduarda Lopes', x: 469, y: 410,
      }, {
        id: 8, name: 'Eurie Seo', x: 469, y: 410,
      }, {
        id: 9, name: 'Emily Xie', x: 469, y: 410,
      }, {
        id: 10, name: 'Ajani Tshimanga', x: 469, y: 410,
      }, {
        id: 11, name: 'Jolie Wang', x: 539, y: 134,
      }, {
        id: 12, name: 'Krish Kapoor', x: 555, y: 122,
      },
      {
        id: 13, name: 'Parker Walther', x: 567, y: 112,
      },
      {
        id: 14, name: 'Steven Li', x: 579, y: 100,
      }, {
        id: 15, name: 'Victor Chen', x: 589, y: 95,
      },
      {
        id: 16, name: 'Victoria Wong', x: 600, y: 83,
      }, {
        id: 17, name: 'Wilson CruzLopez', x: 616, y: 76,
      }, {
        id: 18, name: 'Created By: Madeline Hess', x: 616, y: 76,
      },
      ],
      links: [{ source: 0, target: 1 },
        { source: 1, target: 7 },
        { source: 1, target: 8 },
        { source: 1, target: 9 },
        { source: 1, target: 10 },
        { source: 2, target: 7 },
        { source: 2, target: 8 },
        { source: 2, target: 9 },
        { source: 2, target: 10 },
        { source: 3, target: 7 },
        { source: 3, target: 8 },
        { source: 3, target: 9 },
        { source: 3, target: 10 },
        { source: 4, target: 7 },
        { source: 4, target: 8 },
        { source: 4, target: 9 },
        { source: 4, target: 10 },
        { source: 5, target: 7 },
        { source: 5, target: 8 },
        { source: 5, target: 9 },
        { source: 5, target: 10 },
        { source: 6, target: 7 },
        { source: 6, target: 8 },
        { source: 6, target: 9 },
        { source: 6, target: 10 },
        { source: 7, target: 11 },
        { source: 7, target: 12 },
        { source: 7, target: 13 },
        { source: 7, target: 14 },
        { source: 8, target: 11 },
        { source: 8, target: 12 },
        { source: 8, target: 13 },
        { source: 8, target: 14 },
        { source: 9, target: 11 },
        { source: 9, target: 12 },
        { source: 9, target: 13 },
        { source: 9, target: 14 },
        { source: 10, target: 11 },
        { source: 10, target: 12 },
        { source: 10, target: 13 },
        { source: 10, target: 14 },
        { source: 11, target: 15 },
        { source: 11, target: 16 },
        { source: 11, target: 17 },
        { source: 12, target: 15 },
        { source: 12, target: 16 },
        { source: 12, target: 17 },
        { source: 13, target: 15 },
        { source: 13, target: 16 },
        { source: 13, target: 17 },
        { source: 14, target: 15 },
        { source: 14, target: 16 },
        { source: 14, target: 17 },
      ],
    };

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
    // const width = 600 - margin.left - margin.right;
    // const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const canvasHeight = 700;
    const canvasWidth = 1000;
    const scale = 20;
    const svg = d3.select(this.refs.canvas)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
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

    // const link = svg.selectAll('line')
    //   .data(data.links).enter()
    //   .append('line')
    // // .attr('x1', 50)
    // // .attr('y1', 50)
    // // .attr('x2', (datapoint, iteration) => { iteration * 45; })
    // // .attr('y2', (datapoint) => { canvasHeight - datapoint.id * scale; })
    //   .style('stroke', '#aaa');
    const link = svg
      .selectAll('.link')
      .data(data.links)
      .join('line')
      .classed('link', true);

    // const node = svg.selectAll('circle')
    //   .data(data.nodes).enter()
    //   .append('circle')
    // // .attr('width', 40)
    // // .attr('height', 40)
    //   .attr('cx', canvasHeight / 2)
    //   .attr('cy', canvasWidth / 2)
    //   .attr('r', 20)
    //   .style('fill', '#69b3a2');

    // WORKING!!!
    // const node = svg.selectAll('.node')
    //   .data(data.nodes)
    //   .join('circle')
    //   .attr('r', 50)
    //   .classed('node', true)
    //   .attr('class', (datapoint) => { return datapoint.id; })
    //   .attr('fill', 'orange')
    // //   .classed((d) => { return d.; })
    //   .classed('fixed', (d) => { return d.fx !== undefined; });

    const node = svg.selectAll('.node')
      .data(data.nodes)
      .enter().append('g');

    const circle = node.append('circle')
      .attr('class', 'node')
      .attr('class', (datapoint) => { return datapoint.id; })
      .attr('r', 50)
      .attr('id', function (d) { return d.name; })
      .style('fill', 'orange');

    const label = node.append('svg:text')
      .text(function (d) { return d.name; })
      .style('text-anchor', 'middle')
      .attr('dy', 70)
      .style('fill', '#555')
      .style('font-family', 'Arial')
      .style('font-size', 12);

    // Let's list the force we wanna apply on the network
    // const simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
    //   .force('link', d3.forceLink()                               // This force provides links between nodes
    //     .id(function (d) { return d.id; })                     // This provide  the id of a node
    //     .links(data.links))                                    // and this the list of links
    //   .force('charge', d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
    //   .force('center', d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
    //   .on('end', ticked);

    const simulation = d3
      .forceSimulation()
      .nodes(data.nodes)
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(canvasWidth / 2, canvasHeight / 2))
      .force('link', d3.forceLink(data.links).distance(100))
      .force('collide', d3.forceCollide(75))
      .on('tick', tick);

    // This function is run at each iteration of the force algorithm, updating the nodes position.
    // function ticked() {
    //   link
    //     .attr('x1', function (d) { return d.source.x; })
    //     .attr('y1', function (d) { return d.source.y; })
    //     .attr('x2', function (d) { return d.target.x; })
    //     .attr('y2', function (d) { return d.target.y; });
    //   node
    //     .attr('cx', function (d) { return d.x + 6; })
    //     .attr('cy', function (d) { return d.y - 6; });
    // }
    function tick() {
      link
        .attr('x1', (d) => { return d.source.x; })
        .attr('y1', (d) => { return d.source.y; })
        .attr('x2', (d) => { return d.target.x; })
        .attr('y2', (d) => { return d.target.y; });
      //   node
      //     .attr('cx', (d) => { return d.x; })
      //     .attr('cy', (d) => { return d.y; });
      circle
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; });
      label
        .attr('x', function (d) { return d.x; })
        .attr('y', function (d) { return d.y - 10; });
    }

    // Define dragging behavior
    const drag = d3
      .drag()
      .on('start', dragstart)
      .on('drag', dragged);
    function clamp(x, lo, hi) {
      return x < lo ? lo : x > hi ? hi : x;
    }
    node.call(drag).on('click', click);
    function click(event, d) {
      delete d.fx;
      delete d.fy;
      d3.select(this).classed('fixed', false);
      simulation.alpha(1).restart();
    }
    function dragstart() {
      d3.select(this).classed('fixed', true);
    }
    function dragged(event, d) {
      d.fx = clamp(event.x, 0, canvasWidth);
      d.fy = clamp(event.y, 0, canvasHeight);
      simulation.alpha(1).restart();
    }
  }

  render() { return <div ref="canvas" />; }
}

export default ForceNetwork;
