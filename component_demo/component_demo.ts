import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-component-demo',
  imports: [CommonModule],
  templateUrl: './component-demo.html',
  styleUrl: './component-demo.scss',
})
export class ComponentDemo  {
  @Input() text: string = '';
  @Input() size: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'xmedium' | 'large' | 'xlarge' = 'xmedium';
  @Input() color: 'white' | 'white-80' | 'black' | 'grey' | 'green' | 'red' = 'black';
  @Input() weight: 100 | 400 | 500 | 600 | 700 | 800 | 900  = 400;
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() normal: 'normal' | 'italic' = 'normal';

  // <component-demo text="Hello World" size="large" color="white" [weight]="600" [align]="'left'" [normal]="'italic'"></component-demo>
}
