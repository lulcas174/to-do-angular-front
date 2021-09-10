import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TodoServiceService } from '../services/todo-service.service';
import { Location } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { ActivatedRoute } from '@angular/router';

describe('AddTaskComponent', () => {
    let addTaskComponent: AddTaskComponent;
    let fixture: ComponentFixture<AddTaskComponent>;
    let fb: FormBuilder;
    let service: TodoServiceService;
    let location: Location;
    let route: ActivatedRoute;

    beforeEach(() => {         
        addTaskComponent = new AddTaskComponent(new FormBuilder, service,location,route);
    });

    it('should create', () => {
        expect(addTaskComponent).toBeTruthy();
    });

    it('Form Validator, onSubmit function',fakeAsync(() => {
        const form ={
            id: 1,
            title:'title',
            description: 'description'
        };

        let id = addTaskComponent.form.controls['id'];
        let title = addTaskComponent.form.controls['title'];
        let description = addTaskComponent.form.controls['description'];

        addTaskComponent.form.controls['id'].setValue(form.id);
        addTaskComponent.form.controls['title'].setValue(form.title);
        addTaskComponent.form.controls['description'].setValue(form.description);

        expect (id.valid).toBe(true);
        expect (title.valid).toBe(true);
        expect (description.valid).toBe(true);
    }))

});