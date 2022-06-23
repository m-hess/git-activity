/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-template */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

import React, { Component } from 'react';
import * as d3 from 'd3';
import mhess from '../img/empty.png';

import mbondarenko from '../img/m-bondarenko.png';
import ewei from '../img/e-wei.png';
import jdean from '../img/j-dean.png';
import kahmed from '../img/k-ahmed.png';
import ahernandez from '../img/a-hernandez.png';
import amurali from '../img/a-murali.png';
import bbraun from '../img/b-braun.png';
import mfung from '../img/m-fung.png';
import mlu from '../img/m-lu.png';
import rravishankar from '../img/r-ravishankar.png';
import nbanerjee from '../img/n-banerjee.png';
import labdelrahman from '../img/l-abdelrahman.png';
// import  from '../img/empty.png';

class ForceNetwork extends Component {
  componentDidMount() {
    // };
    const data = {
      nodes: [{
        id: 'm-bondarenko', name: 'Masha Bondarenko', x: 616, y: 76,
      }, {
        id: 'e-wei', name: 'Eric Wei', x: 469, y: 410,
      }, {
        id: 'j-dean', name: 'Josh Dean', x: 469, y: 410,
      }, {
        id: 'k-ahmed', name: 'Khaled Ahmed', x: 469, y: 410,
      }, {
        id: 'a-hernandez', name: 'Adriana Hernandez', x: 469, y: 410,
      }, {
        id: 'a-murali', name: 'Aditya Murali', x: 469, y: 410,
      }, {
        id: 'b-braun', name: 'Bergen Braun', x: 469, y: 410,
      }, {
        id: 'm-fung', name: 'Melanie Fung', x: 469, y: 410,
      }, {
        id: 'm-lu', name: 'Michael Lu', x: 469, y: 410,
      }, {
        id: 'r-ravishankar', name: 'Rahul Ravishankar', x: 469, y: 410,
      }, {
        id: 'n-banerjee', name: 'Neel Benerjee', x: 539, y: 134,
      }, {
        id: 'l-abdelrahman', name: 'Leila Abdelrahman', x: 555, y: 122,
      },
      {
        id: 'nameDASH', name: 'FULLNAME', x: 567, y: 112,
      },
      {
        id: 'nameDASH', name: 'FULLNAME', x: 579, y: 100,
      }, {
        id: 'nameDASH', name: 'FULLNAME', x: 589, y: 95,
      },
      {
        id: 'nameDASH', name: 'FULLNAME', x: 600, y: 83,
      }, {
        id: 'nameDASH', name: 'FULLNAME', x: 616, y: 76,
      },
      ],
      links: [
        { source: 0, target: 8 },
        { source: 0, target: 10 },
        { source: 0, target: 11 },
        { source: 1, target: 8 },
        { source: 1, target: 9 },
        { source: 1, target: 10 },
        { source: 1, target: 11 },
        { source: 2, target: 8 },
        { source: 2, target: 9 },
        { source: 2, target: 10 },
        { source: 2, target: 11 },
        { source: 3, target: 9 },
        { source: 3, target: 10 },
        { source: 3, target: 11 },
        { source: 4, target: 8 },
        { source: 4, target: 8 },
        { source: 4, target: 10 },
        { source: 4, target: 11 },
        { source: 5, target: 8 },
        { source: 5, target: 9 },
        { source: 5, target: 10 },
        { source: 5, target: 11 },
        { source: 6, target: 12 },
        { source: 6, target: 13 },
        { source: 6, target: 15 },
        { source: 7, target: 12 },
        { source: 7, target: 13 },
        { source: 7, target: 14 },
        { source: 7, target: 15 },
        { source: 8, target: 12 },
        { source: 8, target: 13 },
        { source: 8, target: 14 },
        { source: 9, target: 12 },
        { source: 9, target: 13 },
        { source: 9, target: 14 },
        { source: 9, target: 15 },
        { source: 10, target: 16 },
        { source: 11, target: 16 },
        { source: 12, target: 16 },
        { source: 13, target: 16 },
      ],
    };

    this.drawNetwork(data);
  }

  drawNetwork(data) {
    // set the dimensions and margins of the graph
    const canvasHeight = 640;
    const canvasWidth = 1400;
    // append the svg object to the body of the page
    const svg = d3.select('.canvas')
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight);

    // Define defs/patter/images
    const config = {
      avatar_size: 120,
    };
    const defs = svg.append('svg:defs');

    defs.append('svg:pattern')
      .attr('id', 'm-hess')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', mhess)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'm-bondarenko')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', '150%')
      .attr('height', '100%')
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', mbondarenko)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-wei')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', ewei)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'j-dean')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', jdean)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'k-ahmed')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', kahmed)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'a-hernandez')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', ahernandez)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'a-murali')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', amurali)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'b-braun')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', bbraun)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'm-fung')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', mfung)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'm-lu')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', mlu)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'r-ravishankar')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', rravishankar)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'n-banerjee')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', nbanerjee)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'l-abdelrahman')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', labdelrahman)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    // defs.append('svg:pattern')
    //   .attr('id', 'FILLINDASH')
    //   .attr('x', 0)
    //   .attr('y', 0)
    //   .attr('width', 1)
    //   .attr('height', 1)
    //   .attr('patternUnits', 'objectBoundingBox')
    //   .append('svg:image')
    //   .attr('xlink:href', FILLINNODASH)
    //   .attr('width', config.avatar_size)
    //   .attr('height', config.avatar_size);

    // Define visual
    const link = svg
      .selectAll('.link')
      .data(data.links)
      .join('line')
      .style('stroke', '#808385')
      .style('stroke-width', '2px')
      .classed('link', true);

    const node = svg.selectAll('.node')
      .data(data.nodes)
      .enter().append('g');

    const label = node.append('svg:text')
      .text(function (d) { return d.name; })
      .style('text-anchor', 'middle')
      .attr('dy', 90)
      .style('fill', 'white')
      .style('font-family', 'Open Sans')
      .style('font-size', 19);

    const circle = node.append('circle')
      .attr('class', 'node')
      .attr('class', (datapoint) => { return datapoint.id; })
      .attr('r', 60)
      .style('fill', (datapoint) => { return 'url(#' + (datapoint.id) + ')'; })
      .attr('id', function (d) { return d.name; });

    // Let's list the force we wanna apply on the network
    const simulation = d3
      .forceSimulation()
      .nodes(data.nodes)
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(canvasWidth / 2, canvasHeight / 2))
      .force('link', d3.forceLink(data.links).distance(300))
      .force('collide', d3.forceCollide(150))
      .on('tick', tick);

    // This function is run at each iteration of the force algorithm, updating the nodes position.
    const radius = 50;
    function tick() {
      //   node
      //     .attr('cx', (d) => { return d.x; })
      //     .attr('cy', (d) => { return d.y; });
      label
        .attr('x', function (d) { return Math.max(radius - 100, Math.min(canvasWidth - radius - 60, d.x)); })
        .attr('y', function (d) { return Math.max(radius + 10, Math.min(canvasHeight - radius - 80, d.y)) - 10; });
      circle
        .attr('cx', function (d) { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.x)); })
        .attr('cy', function (d) { return Math.max(radius + 10, Math.min(canvasHeight - radius - 80, d.y)); });
      link
        .attr('x1', (d) => { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.source.x)); })
        .attr('y1', (d) => { return Math.max(radius + 10, Math.min(canvasHeight - radius - 80, d.source.y)); })
        .attr('x2', (d) => { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.target.x)); })
        .attr('y2', (d) => { return Math.max(radius + 10, Math.min(canvasHeight - radius - 80, d.target.y)); });
      //   link
    //     .attr('x1', (d) => { return d.source.x; })
    //     .attr('y1', (d) => { return d.source.y; })
    //     .attr('x2', (d) => { return d.target.x; })
    //     .attr('y2', (d) => { return d.target.y; });
    //   label
    //     .attr('x', function (d) { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.x)); })
    //     .attr('y', function (d) { return Math.max(radius, Math.min(canvasHeight - radius - 80, d.y)) - 10; });
    //   circle
    //     .attr('cx', function (d) { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.x)); })
    //     .attr('cy', function (d) { return Math.max(radius, Math.min(canvasHeight - radius - 80, d.y)); });
      //   bbox
    //     .attr('x', function (d) { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.x - 50)); })
    //     .attr('y', function (d) { return Math.max(radius, Math.min(canvasHeight - radius - 60, d.y + 75)) - 10; });
    //   img
    //     .attr('cx', function (d) { return Math.max(radius, Math.min(canvasWidth - radius - 50, d.x)); })
    //     .attr('cy', function (d) { return Math.max(radius, Math.min(canvasHeight - radius - 20, d.y)); });
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

  render() {
    return <div ref="canvas" />;
  }
}

export default ForceNetwork;
