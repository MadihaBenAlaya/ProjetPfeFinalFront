import { Component, OnInit } from '@angular/core';
import { CandidaturesService } from '../shared/candidatures.service';

@Component({
  selector: 'app-offre-stats',
  templateUrl: './offre-stats.component.html',
  styleUrls: ['./offre-stats.component.css']
})
export class OffreStatsComponent implements OnInit {

  constructor(private service:CandidaturesService) { }

  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];

  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  ngOnInit(): void {

    this.service.getStats().subscribe(res=>{
      this.Stat=res;

      console.log("ddd"+this.Stat.map(i=>i.total));
  });
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }


}
