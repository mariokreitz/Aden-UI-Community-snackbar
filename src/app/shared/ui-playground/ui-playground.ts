import { Component, computed, input, signal } from '@angular/core';
import { CodeHighlight } from "../code-highlight/code-highlight";
import { UiPlaygroundHeader } from "./ui-playground-header/ui-playground-header";
import { CommonModule } from '@angular/common';

type PlaygroundTab = 'preview' | 'code' | 'install';
type CodeLanguage = 'markup' | 'scss' | 'typescript' | 'bash';

@Component({
  selector: 'app-ui-playground',
  standalone: true,
  imports: [CodeHighlight, UiPlaygroundHeader, CommonModule],
  templateUrl: './ui-playground.html',
  styleUrl: './ui-playground.scss',
})
export class UiPlayground {
  meta = input<any>();
  htmlCode = input<string>('');
  scssCode = input<string>('');
  tsCode = input<string>('');
  installCode = input<string>('');

  activeTab = signal<PlaygroundTab>('preview');
  activeLang = signal<'markup' | 'scss' | 'typescript'>('markup');

  currentCodeDisplay = computed(() => {
    if (this.activeTab() === 'install') {
      return this.installCode();
    }

    switch (this.activeLang()) {
      case 'markup': return this.htmlCode();
      case 'scss': return this.scssCode();
      case 'typescript': return this.tsCode();
      default: return '';
    }
  });

  currentLanguage = computed<CodeLanguage>(() => {
    if (this.activeTab() === 'install') {
      return 'bash';
    }
    return this.activeLang();
  });

  setTab(tab: PlaygroundTab) {
    this.activeTab.set(tab);
  }

  setLang(lang: 'markup' | 'scss' | 'typescript') {
    this.activeLang.set(lang);
  }
}
