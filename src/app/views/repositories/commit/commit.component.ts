import { Component, OnInit, Input } from '@angular/core';
import { Commit } from 'src/app/models/repository';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {

  @Input() commit: Commit;

  constructor() { }

  ngOnInit() {
  }

}
