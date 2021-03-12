import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  // Atributos
  @Input() set customIf(valor: boolean) {
    valor
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }

  // Constructor
  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}

  // Metodos
}
