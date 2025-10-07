//#region  Class #9   9. Directives & Dependency Injection
import {
  Directive,
  ElementRef,
  inject,
  input,
  isStandalone,
} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Safe Link Directive');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app');
    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      if (address && this.hostElementRef.nativeElement.href) {
        window.open(this.hostElementRef.nativeElement.href, '_blank'); // 👈 Opens in a new tab
      }
    }
    event?.preventDefault();
  }
}
//#endregion
