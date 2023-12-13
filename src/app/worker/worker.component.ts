import { Component } from '@angular/core';
import { Worker } from '../Models/Worker';
import { WorkerService } from '../services/Worker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Language } from '../Models/Language';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent {


  constructor(public WorkerService: WorkerService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.WorkerService.reloadWorkers$.subscribe(x => {
          this.WorkerService.GetWorkers().subscribe(data => this.Workers = data);
      });
  }

  Worker:Worker=new Worker();

  Workers: Worker[] = [];

  selectedWorkers!: Worker[];

  languages: Language[] = [];
 
}
