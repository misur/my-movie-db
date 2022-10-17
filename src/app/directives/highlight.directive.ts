import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighLight]',

})
export class HighLightDirective implements OnInit {
  @Input() textDecoration = '';
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.textDecoration') textDecorationDefault = '';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.rend.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    // this.backgroundColor = 'red';
    // this.textDecorationDefault = this.textDecoration;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.rend.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    // this.textDecorationDefault = '';
  }

  constructor(private elementRef: ElementRef, private rend: Renderer2) {

  }

  ngOnInit(): void {
    // this.rend.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.rend.addClass(this.elementRef.nativeElement, 'my-title');
    // this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    this.elementRef.nativeElement.style.padding = '5px';
    // this.elementRef.nativeElement.style.border = '2px solid lightblue';
    this.elementRef.nativeElement.style.borderRadius = '10px';

  }

}
