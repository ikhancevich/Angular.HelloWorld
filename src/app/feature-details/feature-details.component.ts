import { FeaturesService } from './../features.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-details',
  templateUrl: './feature-details.component.html',
  styleUrls: ['./feature-details.component.css']
})
export class FeatureDetailsComponent implements OnInit {
  id: any;
  name: any;
  details: any;

  constructor(private route: ActivatedRoute, private featuresService: FeaturesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      let id = +paramMap.get("id");
      this.featuresService.getDataById(id).subscribe(element => {
        this.id = element.id;
        this.name = element.name;
        this.details = element.details;
      });
    });
  }
}
