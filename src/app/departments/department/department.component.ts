import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;
  private data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData();
    this.createSvg();
    this.drawPlot();
  }

  private createSvg(): void {
    this.svg = d3
      .select('figure#scatter')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear().domain([2009, 2017]).range([0, this.width]);
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x).tickFormat(d3.format('d')));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);
    this.svg.append('g').call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots
      .selectAll('dot')
      .data(this.data)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => x(d.Released))
      .attr('cy', (d: any) => y(d.Stars))
      .attr('r', 7)
      .style('opacity', 0.5)
      .style('fill', '#69b3a2');

    // Add labels
    dots
      .selectAll('text')
      .data(this.data)
      .enter()
      .append('text')
      .text((d: any) => d.Framework)
      .attr('x', (d: any) => x(d.Released))
      .attr('y', (d: any) => y(d.Stars));
  }

}
