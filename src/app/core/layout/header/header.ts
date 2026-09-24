import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Logo } from '../../../shared/ui/logo/logo';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Logo],
  templateUrl: './header.html',
})
export class Header {
  protected readonly language = inject(LanguageService);
}
