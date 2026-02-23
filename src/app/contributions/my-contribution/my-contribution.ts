import { Component } from '@angular/core';
import { UiPlayground } from "../../shared/ui-playground/ui-playground";

@Component({
  selector: 'app-my-contribution',
  imports: [UiPlayground],
  templateUrl: './my-contribution.html',
  styleUrl: './my-contribution.scss',
})
export class MyContribution {
  meta = {
    title: 'Your Component Title',
    description: 'Your component description goes here. Explain what it does and how it can be used.',
    author: {
      username: 'your-aden-ui-username',
    }
  };

  codeHtml = `
<div class="starter-box">
  <h1>Ready to create?</h1>
  <p>Edit this component to start building.</p>
</div>`;

  codeScss = `
.starter-box {
  text-align: center;

  h1 {
    color: var(--accent-color);
    margin-bottom: 8px;
  }

  p {
    color: var(--text-muted);
  }
}`;

  codeTs = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-contribution',
  imports: [],
  templateUrl: './my-contribution.html',
  styleUrl: './my-contribution.scss',
})
export class MyContribution {

}`;

installCode = `npm install your-component-package-name`;
}
