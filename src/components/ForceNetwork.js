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
import achen from '../img/a-chen.jpeg';
import amyrzabekova from '../img/a-myrzabekova.png.jpg';
import awalther from '../img/parker-walther.jpg';
import bchoy from '../img/b-choy.jpeg';
import dzhong from '../img/d-zhong.png';
import elopes from '../img/e-lopes.png';
import exie from '../img/e-xie.jpeg';
import etshimanga from '../img/EA-Tshimanga.jpg';
import ebhargava from '../img/e-bhargava.png';
import eseo from '../img/e-seo.jpg';
import echang from '../img/e-chang.jpeg';
// import jli from '../img/j-li.png'
import jwang from '../img/j-wang.jpeg';
import kkapoor from '../img/K-Kapoor.jpg';
import sli from '../img/s-li.png';
// import ntsai from '../img/n-tsai.png';
import vwong from '../img/Victoria-Wong.jpeg';
import vchen from '../img/v-chen.png';
import wcruzlopez from '../img/w-cruzlopez.jpeg';

class ForceNetwork extends Component {
  componentDidMount() {
    // };
    const data = {
      nodes: [{
        id: 'w-cruzlopez', name: 'Wilson Cruz-Lopez', x: 616, y: 76,
      }, {
        id: 'a-chen', name: 'Addison Chen', x: 469, y: 410,
      }, {
        id: 'a-myrzabekova', name: 'Anara Myrzabekova', x: 469, y: 410,
      }, {
        id: 'b-choy', name: 'Bryan Choy', x: 469, y: 410,
      }, {
        id: 'd-zhong', name: 'Denise Zhong', x: 469, y: 410,
      }, {
        id: 'e-bhargava', name: 'Eshan Bhargava', x: 469, y: 410,
      }, {
        id: 'e-chang', name: 'Evan Chang', x: 469, y: 410,
      }, {
        id: 'e-lopes', name: 'Eduarda Lopes', x: 469, y: 410,
      }, {
        id: 'e-seo', name: 'Eurie Seo', x: 469, y: 410,
      }, {
        id: 'e-xie', name: 'Emily Xie', x: 469, y: 410,
      }, {
        id: 'e-tshimanga', name: 'Ajani Tshimanga', x: 539, y: 134,
      }, {
        id: 'j-wang', name: 'Jolie Wang', x: 555, y: 122,
      },
      {
        id: 'k-kapoor', name: 'Krish Kapoor', x: 567, y: 112,
      },
      {
        id: 'a-walther', name: 'Parker Walther', x: 579, y: 100,
      }, {
        id: 's-li', name: 'Steven Li', x: 589, y: 95,
      },
      {
        id: 'v-chen', name: 'Victor Chen', x: 600, y: 83,
      }, {
        id: 'v-wong', name: 'Victoria Wong', x: 616, y: 76,
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
      .attr('id', 'a-chen')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', '150%')
      .attr('height', '100%')
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', achen)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'a-myrzabekova')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', amyrzabekova)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'a-walther')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', awalther)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'b-choy')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', bchoy)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'd-zhong')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', dzhong)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-lopes')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', elopes)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-xie')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', exie)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-tshimanga')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', etshimanga)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-bhargava')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', ebhargava)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-seo')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', eseo)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'e-chang')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', echang)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'j-wang')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', jwang)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'k-kapoor')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', kkapoor)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 's-li')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', sli)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'v-wong')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', vwong)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'v-chen')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', vchen)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

    defs.append('svg:pattern')
      .attr('id', 'w-cruzlopez')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('svg:image')
      .attr('xlink:href', wcruzlopez)
      .attr('width', config.avatar_size)
      .attr('height', config.avatar_size);

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
