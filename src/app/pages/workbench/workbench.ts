import { Component } from '@angular/core';
import { MyContribution } from "../../contributions/my-contribution/my-contribution";

@Component({
  selector: 'app-workbench',
  imports: [MyContribution],
  templateUrl: './workbench.html',
  styleUrl: './workbench.scss',
})
export class Workbench {

}
