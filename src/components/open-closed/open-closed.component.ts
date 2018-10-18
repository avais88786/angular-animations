import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '../../../node_modules/@angular/animations';

@Component({
  selector: 'app-open-closed',
  templateUrl: './open-closed.component.html',
  styleUrls: ['./open-closed.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '300px',
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s ease-out')
      ]),
      transition('closed => open', [
        animate('1s ease-in')
      ])
    ]),
    trigger('openCloseWithVoid',[
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate('1s ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        animate('1s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('openCloseWithVoidVertical',[
      transition('void => *', [
        style({ transform: 'translateY(-50%)'}),
        animate('0.3s ease-in', style({ transform: 'translateY(0)' }))
      ]),
      transition('* => void', [
        animate('0.3s ease-out', style({ transform: 'translateY(-50%)' }))
      ])
    ])
  ]
})
export class OpenClosedComponent {

  constructor() { }

  isOpen = true;
  showSecondBlock = false;
  showThirdBlock = false;
  show4thBlock = false;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleBelow(){
    this.showSecondBlock = !this.showSecondBlock;
  }

  toggleBelow2(){
    this.showThirdBlock = !this.showThirdBlock;
  }
}
