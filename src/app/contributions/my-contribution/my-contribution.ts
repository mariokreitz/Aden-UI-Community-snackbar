import { Component, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { UiPlayground } from '../../shared/ui-playground/ui-playground';

@Component({
    selector: 'app-my-contribution',
    imports: [ UiPlayground ],
    templateUrl: './my-contribution.html',
    styleUrl: './my-contribution.scss',
})
export class MyContribution {
    meta = {
        title: 'Snackbar',
        description: 'Your component description goes here. Explain what it does and how it can be used.',
        author: {
            username: 'mario-kreitz',
        },
    };
    codeHtml = `
    @if (snackbar()) {
\t\t\t<div [class.bottom]="position() === 'bottom'"
\t\t\t\t\t [class.error]="snackbar()?.type === 'error'"
\t\t\t\t\t [class.info]="snackbar()?.type === 'info'"
\t\t\t\t\t [class.show]="snackbar()"
\t\t\t\t\t [class.success]="snackbar()?.type === 'success'"
\t\t\t\t\t [class.top]="position() === 'top'"
\t\t\t\t\t [class.warning]="snackbar()?.type === 'warning'"
\t\t\t\t\t class="aden-snackbar">
\t\t\t\t<div class="snackbar-icon">
\t\t\t\t\t@if (snackbar()?.type === 'success') {
\t\t\t\t\t\t<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
\t\t\t\t\t\t\t<polyline points="20 6 9 17 4 12"></polyline>
\t\t\t\t\t\t</svg>
\t\t\t\t\t} @else if (snackbar()?.type === 'error') {
\t\t\t\t\t\t<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
\t\t\t\t\t\t\t<circle cx="12" cy="12" r="10"></circle>
\t\t\t\t\t\t\t<line x1="15" x2="9" y1="9" y2="15"></line>
\t\t\t\t\t\t\t<line x1="9" x2="15" y1="9" y2="15"></line>
\t\t\t\t\t\t</svg>
\t\t\t\t\t} @else if (snackbar()?.type === 'info') {
\t\t\t\t\t\t<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
\t\t\t\t\t\t\t<circle cx="12" cy="12" r="10"></circle>
\t\t\t\t\t\t\t<line x1="12" x2="12" y1="16" y2="12"></line>
\t\t\t\t\t\t\t<line x1="12" x2="12" y1="8" y2="8"></line>
\t\t\t\t\t\t</svg>
\t\t\t\t\t} @else if (snackbar()?.type === 'warning') {
\t\t\t\t\t\t<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
\t\t\t\t\t\t\t<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
\t\t\t\t\t\t\t<line x1="12" x2="12" y1="9" y2="13"></line>
\t\t\t\t\t\t\t<line x1="12" x2="12" y1="17" y2="17"></line>
\t\t\t\t\t\t</svg>
\t\t\t\t\t}
\t\t\t\t</div>
\t\t\t\t<div class="snackbar-content">
\t\t\t\t\t<span class="snackbar-title">@if (snackbar()?.type === 'success') {
\t\t\t\t\t\tSuccess
\t\t\t\t\t} @else if (snackbar()?.type === 'error') {
\t\t\t\t\t\tError
\t\t\t\t\t} @else if (snackbar()?.type === 'info') {
\t\t\t\t\t\tInfo
\t\t\t\t\t} @else if (snackbar()?.type === 'warning') {
\t\t\t\t\t\tWarning
\t\t\t\t\t}</span>
\t\t\t\t\t<span class="snackbar-message">{{ snackbar()?.message }}</span>
\t\t\t\t</div>
\t\t\t\t@if (snackbar()?.actionLabel) {
\t\t\t\t\t<button (click)="undoSnackbar()" class="snackbar-action">{{ snackbar()?.actionLabel }}</button>
\t\t\t\t}
\t\t\t\t@if (dismissible()) {
\t\t\t\t\t<button (click)="dismissSnackbar()" class="snackbar-close">✕</button>
\t\t\t\t}
\t\t\t</div>
\t\t}
    `;
    codeScss = `
:host {
  --aden-bg: #0f0f0f;
  --aden-surface: #1a1a1a;
  --aden-border: #333333;
  --aden-text: #e5e5e5;
  --aden-muted: #888;
  --aden-primary: #4ade80;
}

.aden-snackbar {
  position: absolute;
  left: 50%;
  min-width: 320px;
  padding: 12px 16px;
  background-color: var(--aden-surface);
  border: 1px solid var(--aden-border);
  border-left: 4px solid var(--aden-primary);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  opacity: 0;
  transform: translateX(-50%) translateY(100px);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.aden-snackbar.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.aden-snackbar.top {
  top: 24px;
  bottom: auto;
}
.aden-snackbar.bottom {
  bottom: 24px;
  top: auto;
}

/* Type-based border and icon color */
.aden-snackbar.success { border-left-color: #4ade80; }
.aden-snackbar.error   { border-left-color: #ef4444; }
.aden-snackbar.info    { border-left-color: #38bdf8; }
.aden-snackbar.warning { border-left-color: #facc15; }

.aden-snackbar.success .snackbar-icon { background-color: rgba(74,222,128,0.1); color: #4ade80; }
.aden-snackbar.error   .snackbar-icon { background-color: rgba(239,68,68,0.1); color: #ef4444; }
.aden-snackbar.info    .snackbar-icon { background-color: rgba(56,189,248,0.1); color: #38bdf8; }
.aden-snackbar.warning .snackbar-icon { background-color: rgba(250,204,21,0.1); color: #facc15; }

.snackbar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
}
.snackbar-icon svg {
  width: 14px;
  height: 14px;
}

.snackbar-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.snackbar-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
}
.snackbar-message {
  font-size: 0.8rem;
  color: var(--aden-muted);
}

.snackbar-action {
  background: none;
  border: none;
  color: var(--aden-primary);
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 4px 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}
.snackbar-action:hover { color: #fff; }

.snackbar-close {
  background: none;
  border: none;
  color: var(--aden-muted);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0 0 0 8px;
  line-height: 1;
  transition: color 0.2s;
}
.snackbar-close:hover { color: #fff; }



`;
    codeTs = `
import { Component, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';


@Component({
    selector: 'app-snackbar',
    imports: [],
    templateUrl: './snackbar.html',
    styleUrl: './snackbar.scss',
})
export class SnackbarComponent {
    private readonly snackbarService: SnackbarService = inject(SnackbarService);
    public readonly snackbar: Signal<SnackbarData | null> = this.snackbarService.snackbar;

    public dismissSnackbar() {
        this.snackbarService.dismiss();
    }

    public undoSnackbar() {
        const snackbar: SnackbarData | null = this.snackbarService.snackbar();
        if (snackbar?.actionCallback) {
            snackbar.actionCallback();
        }
        this.snackbarService.dismiss();
    }
}

    
export type SnackbarPosition = 'top' | 'bottom';
export type SnackbarType = 'success' | 'error' | 'info' | 'warning';

export interface SnackbarConfig {
    dismissible?: boolean;
    duration?: number; // in milliseconds
    position?: SnackbarPosition;
}

export interface SnackbarData {
    string;
    SnackbarType;
    actionLabel?: string;
    actionCallback?: () => void;
}

export const SNACKBAR_DEFAULT_CONFIG: SnackbarConfig = {
    dismissible: true,
    duration: 3_000,
    position: 'bottom',
};

@Injectable({ providedIn: 'root' })
export class SnackbarService {
    private readonly _snackbar: WritableSignal<SnackbarData | null> = signal<SnackbarData | null>(null);
    public readonly snackbar: Signal<SnackbarData | null> = this._snackbar.asReadonly();
    private dismissTimeout: ReturnType<typeof setTimeout> | undefined;
    private readonly config: SnackbarConfig = SNACKBAR_DEFAULT_CONFIG;

    public showSuccess(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'success', overrides, actionLabel, actionCallback)
    }

    public showError(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'error', overrides, actionLabel, actionCallback);
    }

    public showInfo(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'info', overrides, actionLabel, actionCallback);
    }

    public showWarning(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'warning', overrides, actionLabel, actionCallback);
    }

    public dismiss(): void {
        this._snackbar.set(null);
        if (this.dismissTimeout) {
            clearTimeout(this.dismissTimeout);
        }
    }

    private show(message: string, type: SnackbarType, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        const finalConfig = { ...this.config, ...overrides };
        this._snackbar.set({ message, type, actionLabel, actionCallback });
        if (this.dismissTimeout) {
            clearTimeout(this.dismissTimeout);
        }
        this.dismissTimeout = setTimeout(() => {
            this._snackbar.set(null);
        }, finalConfig.duration);
    }
}
    `;
    installCode = ``;
    public readonly duration: WritableSignal<number> = signal(3000);
    public readonly position: WritableSignal<SnackbarPosition> = signal<SnackbarPosition>('bottom');
    public readonly dismissible: WritableSignal<boolean> = signal(true);
    private readonly snackbarService: SnackbarService = inject(SnackbarService);
    public readonly snackbar: Signal<SnackbarData | null> = this.snackbarService.snackbar;

    public dismissSnackbar() {
        this.snackbarService.dismiss();
    }

    public undoSnackbar() {
        const snackbar: SnackbarData | null = this.snackbarService.snackbar();
        if (snackbar?.actionCallback) {
            snackbar.actionCallback();
        }
        this.snackbarService.dismiss();
    }

    public setDuration(event: Event) {
        const input = event.target as HTMLInputElement;
        const value = Number(input.value);
        if (!isNaN(value) && value >= 500 && value <= 10000) {
            this.duration.set(value);
        }
    }

    public setPosition(event: Event) {
        const select = event.target as HTMLSelectElement;
        const value = select.value as SnackbarPosition;
        if (value === 'top' || value === 'bottom') {
            this.position.set(value);
        }
    }

    public setDismissible() {
        this.dismissible.update(pev => !pev);
    }

    public showSuccess() {
        this.snackbarService.showSuccess(
          'This is a success message!',
          { duration: this.duration(), position: this.position(), dismissible: this.dismissible() },
          'UNDO',
          () => alert('Undo action!'),
        );
    }

    public showError() {
        this.snackbarService.showError(
          'This is an error message!',
          { duration: this.duration(), position: this.position(), dismissible: this.dismissible() },
          'UNDO',
          () => alert('Undo error!'),
        );
    }

    public showInfo() {
        this.snackbarService.showInfo(
          'This is an info message!',
          { duration: this.duration(), position: this.position(), dismissible: this.dismissible() },
        );
    }

    public showWarning() {
        this.snackbarService.showWarning(
          'This is a warning message!',
          { duration: this.duration(), position: this.position(), dismissible: this.dismissible() },
        );
    }
}

export type SnackbarPosition = 'top' | 'bottom';
export type SnackbarType = 'success' | 'error' | 'info' | 'warning';

export interface SnackbarConfig {
    dismissible?: boolean;
    duration?: number; // in milliseconds
    position?: SnackbarPosition;
}

export interface SnackbarData {
    message: string;
    type: SnackbarType;
    actionLabel?: string;
    actionCallback?: () => void;
}

export const SNACKBAR_DEFAULT_CONFIG: SnackbarConfig = {
    dismissible: true,
    duration: 3_000,
    position: 'bottom',
};

@Injectable({ providedIn: 'root' })
export class SnackbarService {
    private readonly _snackbar: WritableSignal<SnackbarData | null> = signal<SnackbarData | null>(null);
    public readonly snackbar: Signal<SnackbarData | null> = this._snackbar.asReadonly();
    private dismissTimeout: ReturnType<typeof setTimeout> | undefined;
    private readonly config: SnackbarConfig = SNACKBAR_DEFAULT_CONFIG;

    public showSuccess(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'success', overrides, actionLabel, actionCallback);
    }

    public showError(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'error', overrides, actionLabel, actionCallback);
    }

    public showInfo(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'info', overrides, actionLabel, actionCallback);
    }

    public showWarning(message: string, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        this.show(message, 'warning', overrides, actionLabel, actionCallback);
    }

    public dismiss(): void {
        this._snackbar.set(null);
        if (this.dismissTimeout) {
            clearTimeout(this.dismissTimeout);
        }
    }

    private show(message: string, type: SnackbarType, overrides?: Partial<SnackbarConfig>, actionLabel?: string, actionCallback?: () => void): void {
        const finalConfig = { ...this.config, ...overrides };
        this._snackbar.set({ message, type, actionLabel, actionCallback });
        if (this.dismissTimeout) {
            clearTimeout(this.dismissTimeout);
        }
        this.dismissTimeout = setTimeout(() => {
            this._snackbar.set(null);
        }, finalConfig.duration);
    }
}