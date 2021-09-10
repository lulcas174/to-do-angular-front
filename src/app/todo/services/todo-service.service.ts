import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) {}
  private API = 'http://localhost:8000/tarefas';

  GET_API(){
    return this.http.get<Task[]>(`${this.API}`);
  }
  loadByID(id:number){
    return this.http.get(`${this.API}/${id}`);
  }
  POST_API(tarefas:Task){
    return this.http.post<Task[]>(`${this.API}`,tarefas);
  }
  PUT_API(tarefas:any){
    return this.http.put(`${this.API}/${tarefas.id}`,tarefas);
  }
  DELETE_API(id:any){
    return this.http.delete(`${this.API}/${id}`);
  }
}
