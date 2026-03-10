import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class AppDisableAfterClick {
   @Input() seats!: number;

  constructor(
    private ele: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click') onClick() {

    const button = this.ele.nativeElement;
    const originalText = button.innerText;

    this.renderer.setProperty(button, 'disabled', true);
    this.renderer.setProperty(button, 'innerText', 'Processing...');

    setTimeout(() => {

      if (this.seats !== 0) {
        this.renderer.setProperty(button, 'disabled', false);
      }
      this.renderer.setProperty(button, 'innerText', originalText);

    }, 3000);
  }
}


/*import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
})
export class AppDisableAfterClick {
  @Input() seats!: number;

  constructor(
    private ele: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click') onClick() {

    const button = this.ele.nativeElement;
    const originalText = button.innerText;

    this.renderer.setProperty(button, 'disabled', true);
    this.renderer.setProperty(button, 'innerText', 'Processing...');

    setTimeout(() => {

      if (this.seats !== 0) {
        this.renderer.setProperty(button, 'disabled', false);
      }
      this.renderer.setProperty(button, 'innerText', originalText);

    }, 3000);
  }
}
The directive should: 
1. Be applied to a button. 
2. When the user clicks the button, it becomes disabled. 
3. The button text should change to: Processing… 
4. Allow the button to re-enable after 3 seconds.*/