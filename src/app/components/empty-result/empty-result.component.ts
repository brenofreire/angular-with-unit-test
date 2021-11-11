import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-result',
  templateUrl: './empty-result.component.html',
  styleUrls: ['./empty-result.component.css'],
})
export class EmptyResultComponent implements OnInit {
  @Input() text;

  constructor() {}

  ngOnInit(): void {}
}
