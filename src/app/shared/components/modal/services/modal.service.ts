import { BodyInjectorService } from './../../../services/body-injector.service';
import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalRef } from '../models/modal-ref/modal-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponenteRef();
    componentRef.instance.config = config;
    console.log(componentRef.instance);
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponenteRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
