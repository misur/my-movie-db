import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appShowAddNewForm]'
})
export class ShowAddNewFormDirective {
  @Input() set appShowAddNewForm(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }


  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
