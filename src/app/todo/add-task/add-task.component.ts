import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoServiceService } from '../services/todo-service.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder, 
    private service: TodoServiceService, 
    private  location: Location,   
    private route: ActivatedRoute
    ) {
    this.form = fb.group({
      id:[null],
      title:[null,[Validators.required]],
      description:[null,[Validators.required]],
    })
  }
  onRefresh() {
    window.location.reload();
    }
    
  onSubmit() {
    if(this.form.valid){
      if(this.form.value.id){
        this.service.PUT_API(this.form.value).subscribe(success => {
          console.log('atualizou');
          this.location.back();
        })
      }else{
        this.service.POST_API(this.form.value).subscribe(data => {console.log(data)})
        this.onRefresh();
      }
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const getId = this.service.loadByID(id);
      getId.subscribe(data=>{
        this.updateForm(data);
      })
    })
  }

    updateForm(task:any) {
      this.form.patchValue({
        id:task.id,
        title:task.title,
        description:task.description,
      })
    }
}
