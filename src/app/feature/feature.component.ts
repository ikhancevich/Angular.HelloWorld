import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() details: string;

  constructor() { }

  ngOnInit() {
  }

}
