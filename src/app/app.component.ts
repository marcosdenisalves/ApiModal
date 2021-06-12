import { ModalService, ModalRef } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Flávio';
  public modalRef: ModalRef;

  constructor(private modaService: ModalService) { }

  public show(): void {
    this.modalRef = this.modaService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
