import { fade } from './shared/animations/fade/fade.component';
import { ModalService } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Flávio';
  public modalRef: ModalRef;
  public info = false;

  constructor(private modaService: ModalService) { }

  public show(): void {
    this.modalRef = this.modaService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }
}
