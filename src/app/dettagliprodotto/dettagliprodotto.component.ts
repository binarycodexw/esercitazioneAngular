import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { oggettoCard } from '../interface';


@Component({
  selector: 'app-dettagliprodotto',
  templateUrl: './dettagliprodotto.component.html',
  styleUrls: ['./dettagliprodotto.component.css']
})
export class DettagliprodottoComponent implements OnInit {


  
  @Input() cardFigure?:oggettoCard;
  @Output() close = new EventEmitter<oggettoCard>();
  @Output() add = new EventEmitter<oggettoCard>();

  constructor() { }

  ngOnInit(): void {
  }

}
