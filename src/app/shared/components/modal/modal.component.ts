import { Component, HostBinding, OnInit } from '@angular/core';
import { fade } from '../../animations/fade/fade.component';
import { ModalConfig } from './interfaces/modal-config';
import { ModalRef } from './models/modal-ref/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent implements OnInit {
  @HostBinding('@fade') fade = true;
  public config: ModalConfig;
  public modalRef: ModalRef;

  ngOnInit(): void {
  }

}
