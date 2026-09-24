import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'pt' | 'en';

const STORAGE_KEY = 'gv.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  readonly current = signal<Language>('pt');

  init() {
    this.use(this.readSaved() ?? 'pt');
  }

  toggle() {
    this.use(this.current() === 'pt' ? 'en' : 'pt');
  }

  private use(lang: Language) {
    this.current.set(lang);
    this.translate.use(lang);
    this.document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }

  private readSaved(): Language | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'pt' || saved === 'en' ? saved : null;
    } catch {
      return null;
    }
  }
}
