// dirty-checks.component.ts

import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "dirty-checks",
  template: ` <code class="dirty-checks">({{ renders() }})</code> `,
  styles: [
    `
      :host {
        display: inline-block;
        border-radius: 100%;
        border: 2px solid var(--palette-secondary-main);
        padding: 1rem;
        font-size: var(--text-lg);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DirtyChecksComponent {
  private _renders = 0;

  renders() {
    return ++this._renders;
  }
}
