import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { TodoServiceService } from '../services/todo-service.service';
import { catchError, switchMap, take } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal:any;
  @ViewChild('template') template:any;
  selectedTask!:Task;

  modalRef?: BsModalRef; 
  list! : any[];
  constructor(
    private todoService: TodoServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  onRefresh() {
    window.location.reload();
    }
  ngOnInit(): void {
    this.get_list();
  
  }

  get_list(){
    this.todoService.GET_API().subscribe(dados=>{this.list = dados})
  }

  edit(id:number){
    this.router.navigate(['editar',id],{relativeTo:this.route})
  }

  delete(task:Task){
    this.selectedTask = task;
    console.log(this.selectedTask)
    this.modalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }
  
  confirmeDelete(){
    console.log(this.selectedTask);
    this.todoService.DELETE_API(this.selectedTask).subscribe(success => {
      this.onRefresh();
    }, error =>{
      console.log("deu erro.")
    }
    );
  }

  declineDelete(){
  this.modalService.hide();
  }

  openModal() {
    this.modalRef = this.modalService.show(this.template);
  }
}
