import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { oggettoCard } from '../interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() card!:oggettoCard;

  @Output() showDetails = new EventEmitter<oggettoCard>();

  constructor() { }

  ngOnInit(): void {
  }

}
