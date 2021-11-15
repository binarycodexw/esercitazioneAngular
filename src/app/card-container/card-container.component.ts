import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { oggettoCard } from '../interface';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})

export class CardContainerComponent implements OnInit {

 @Input() cards!:oggettoCard[];
 @Output() showCard = new EventEmitter<oggettoCard>();



  constructor() { }

  ngOnInit(): void {
  }

}
