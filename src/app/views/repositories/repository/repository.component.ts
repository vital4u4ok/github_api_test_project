import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() repository: Repository;
  @Output() selectRepository = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.selectRepository.emit(this.repository);
  }

}
