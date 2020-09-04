import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proctoring-placeholder',
  templateUrl: './proctoring-placeholder.component.html',
  styleUrls: ['./proctoring-placeholder.component.css']
})
export class ProctoringPlaceholderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCheckProctoringCompatibility() {
    this.router.navigate(["/checkcompitibility"]);
 }

}
