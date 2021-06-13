import { fade } from './shared/animations/fade/fade.component';
import { ModalService } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Marcos Dênis';
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;

  constructor(
    private modaService: ModalService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Dênis', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    });
  }

  public show(): void {
    this.modalRef = this.modaService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
  }
}
