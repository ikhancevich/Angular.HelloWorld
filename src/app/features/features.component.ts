import { FeatureComponent } from './../feature/feature.component';
import { FeaturesService } from './../features.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features;
  dataCount: number = 0;

  constructor(private featuresService: FeaturesService) { }

  ngOnInit() {
    this.featuresService.getData().subscribe(item => {
      this.features = item;
      this.dataCount = item.length;
    });
  }

}
