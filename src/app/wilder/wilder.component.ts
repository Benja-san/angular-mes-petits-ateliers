import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-wilder',
  templateUrl: './wilder.component.html',
  styleUrls: ['./wilder.component.scss'],
})
export class WilderComponent {
  wilderName: string = '';
  wilder: string = '';
  wilders: string[] = ['tristan', 'Arturo', 'selin', 'remy'];
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.wilderName = params.get('wilderName') as string;
      this.wilder = this.wilders.find((wilder) => {
        return wilder.toLowerCase() === this.wilderName;
      }) as string;
      if (!this.wilder) {
        this.router.navigate(['/wilders-search']);
      }
    });
  }
}
