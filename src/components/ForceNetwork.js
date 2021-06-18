/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-template */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import * as d3 from 'd3';
import mhess from '../imgs/m-hess.png';
import achen from '../imgs/a-chen.jpeg';
import amyrzabekova from '../imgs/a-myrzabekova.png.jpg';
import awalther from '../imgs/parker-walther.jpg';
import bchoy from '../imgs/b-choy.jpeg';
import dzhong from '../imgs/d-zhong.png';
import elopes from '../imgs/e-lopes.png';
import exie from '../imgs/e-xie.jpeg';
import etshimanga from '../imgs/EA-Tshimanga.jpg';
import ebhargava from '../imgs/e-bhargava.png';
import eseo from '../imgs/e-seo.jpg';
import echang from '../imgs/e-chang.jpeg';
// import jli from '../imgs/j-li.png'
import jwang from '../imgs/j-wang.jpeg';
import kkapoor from '../imgs/K-Kapoor.jpg';
import sli from '../imgs/s-li.png';
// import ntsai from '../imgs/n-tsai.png';
import vwong from '../imgs/Victoria-Wong.jpeg';
import vchen from '../imgs/v-chen.png';
import wcruzlopez from '../imgs/w-cruzlopez.jpeg';
// import '../style.scss';

class ForceNetwork extends Component {
  componentDidMount() {
    // const data = {
    //   nodes: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D'  }, { id: 5, name: 'E'  }, { id: 6, name: 'F' }, { id: 7, name: 'G' }, { id: 8, name: 'H' }, { id: 9, name: 'I' }, { id: 10, name: 'J' }],
    //   links: [{ source: 1, target: 2 }, { source: 1, target: 5 }, { source: 1, target: 6 }, { source: 2, target: 3 }, { source: 2, target: 7  }, { source: 3, target: 4 }, { source: 8, target: 3 }, { source: 4, target: 5 }, { source: 4, target: 9 }, { source: 5, target: 10 }],
    // };
    const data = {
      nodes: [{
        id: 'm-hess', name: 'Created By: Maddie Hess', x: 469, y: 410,
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
      }, {
        id: 'w-cruzlopez', name: 'Wilson Cruz-Lopez', x: 616, y: 76,
      },
      ],
      links: [
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
    const canvasHeight = 640;
    const canvasWidth = 1200;
    const scale = 20;
    const svg = d3.select(this.refs.canvas)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
    //   .style('background-color', 'black')
      .style('stroke-width', '3px');

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

    // defs.append('svg:pattern')
    //   .attr('id', 'm-hess')
    // //   .attr('patternContentUnits', 'objectBoundingBox')
    //   .attr('patternUnits', 'userSpaceOnUse')
    //   .attr('width', '50')
    //   .attr('height', '50')
    //   .append('svg:image')
    //   .attr('xlink:href', '../imgs/m-hess.png')
    //   .attr('x', 0)
    //   .attr('y', 0)
    //   .attr('width', 6)
    //   .attr('height', 6);

    // Define visual
    const link = svg
      .selectAll('.link')
      .data(data.links)
      .join('line')
    //   .style('stroke', 'lime')
    //   .style('stroke', '#4b7262')
      .style('stroke', '#cc3300')
      .classed('link', true);

    const node = svg.selectAll('.node')
      .data(data.nodes)
      .enter().append('g');
    //   .attr('fill', 'purple');
    //   .attr('fillImage', 'url(../imgs/m-hess.png)');
    //   .attr('style', 'fill:url(../imgs/m-hess.png)');

    const label = node.append('svg:text')
      .text(function (d) { return d.name; })
      .style('text-anchor', 'middle')
      .attr('dy', 90)
      .style('fill', 'white')
      .style('font-family', 'Open Sans')
    //   .style('font-family', 'Lusitana')
      .style('font-size', 19);

    const circle = node.append('circle')
      .attr('class', 'node')
      .attr('class', (datapoint) => { return datapoint.id; })
      .attr('r', 60)
      .style('fill', (datapoint) => { return 'url(#' + (datapoint.id) + ')'; })
    //   .style('fill', 'url(#m-hess)')
      .attr('id', function (d) { return d.name; });

    // const bbox = node.append('rect', 'text')
    //   .attr('width', '100px')
    //   .attr('height', '25px')
    //   .style('fill', 'black');

    // const img = svg.selectAll('circle').append('svg:image')
    //   .attr('xlink:href', mhess)
    //   .attr('cx', 700)
    //   .attr('cy', 300)
    //   .attr('height', 10)
    //   .attr('width', 10);

    //   .attr('fill', 'url(#m-hess')
    //   .attr('fillImage', ' url(../imgs/m-hess.png)')

    // const img = node.append('svg:image')
    //   .attr('xlink:href', 'fill:url(../imgs/m-hess.png)')
    //   .attr('x', 2)
    //   .attr('width', 76)
    //   .attr('height', 120);
    //   .attr('style', 'fill:url(../imgs/m-hess.png)');

    // const img = circle.append('svg:image')
    //   .attr('xlink:href', 'https://placekitten.com/300/200');
    //   .style('fill', 'orange');
    // .attr("x", function(d){return d.bbox.x})
    // .attr("y", function(d){return d.bbox.y})
    // .attr("width", function(d){return d.bbox.width})
    // .attr("height", function(d){return d.bbox.height})
    // .style("fill", "#FFE6F0");;

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
      .force('collide', d3.forceCollide(90))
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
    const radius = 50;
    function tick() {
      link
        .attr('x1', (d) => { return d.source.x; })
        .attr('y1', (d) => { return d.source.y; })
        .attr('x2', (d) => { return d.target.x; })
        .attr('y2', (d) => { return d.target.y; });
      //   node
      //     .attr('cx', (d) => { return d.x; })
      //     .attr('cy', (d) => { return d.y; });
      label
        .attr('x', function (d) { return Math.max(radius - 100, Math.min(canvasWidth - radius - 60, d.x)); })
        .attr('y', function (d) { return Math.max(radius + 10, Math.min(canvasHeight - radius - 80, d.y)) - 10; });
      circle
        .attr('cx', function (d) { return Math.max(radius, Math.min(canvasWidth - radius - 60, d.x)); })
        .attr('cy', function (d) { return Math.max(radius + 10, Math.min(canvasHeight - radius - 80, d.y)); });
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

  render() { return <div ref="canvas" />; }
}

export default ForceNetwork;
