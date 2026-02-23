import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-ui-playground-header',
  imports: [],
  templateUrl: './ui-playground-header.html',
  styleUrl: './ui-playground-header.scss',
})
export class UiPlaygroundHeader {
  meta = input<any>();
  author = computed(() => this.meta()?.author);
}
