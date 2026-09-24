import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Game Vault"
    >
      <rect width="32" height="32" rx="8" fill="#5a2d81" />
      <g stroke="#f2f0f7" stroke-width="1.8" stroke-linecap="round">
        <ellipse cx="15" cy="9.5" rx="7" ry="2.8" />
        <path d="M8 9.5v10.5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V9.5" />
        <path d="M8 15c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8" />
      </g>
      <circle cx="24" cy="24" r="6.5" fill="#0b0b0f" />
      <g stroke="#b58ae0" stroke-linecap="round">
        <rect x="19.5" y="21.3" width="9" height="5.6" rx="2.6" stroke-width="1.3" />
        <path d="M22 23.1v2M21 24.1h2" stroke-width="1" />
      </g>
      <circle cx="25.9" cy="23.5" r="0.65" fill="#b58ae0" />
      <circle cx="26.8" cy="24.8" r="0.65" fill="#b58ae0" />
    </svg>
  `,
  host: { class: 'inline-flex' },
})
export class Logo {
  readonly size = input(32);
}
