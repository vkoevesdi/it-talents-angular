import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ToDo} from "../entity/ToDo";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private username: string = "admin"
  private password: string = "adminsafe"
  private todoUrl: string = "http://localhost:8080/todo"

  constructor(private httpClient: HttpClient) {
  }

  private authorization() {
    return {
      headers: {
        Authorization: "Basic " + btoa(this.username + ":" + this.password)
      }
    }
  }

  public getTodoById(id:number): Observable<ToDo> {
    return this.httpClient.get<ToDo>(`${this.todoUrl}/${id}` + this, this.authorization())
  }
  public getAllTodos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.todoUrl + "/all", this.authorization())
  }

  public createTodo(id:number , text: string, completed: boolean): Observable<ToDo> {
    const todo: ToDo = new ToDo(id, text, completed)
    return this.httpClient.post<ToDo>(this.todoUrl, this.authorization)
  }

  /*
  public updateTodo(todo:ToDo): Observable<ToDo> {
    return this.httpClient.put<ToDo>(`${this.todoUrl}/${id}`, this.authorization())
  }*/

  public findAllByCompletedIsTrue(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.todoUrl + "/completed", this.authorization())
  }

  public findAllByCompletedIsFalse(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(this.todoUrl + "/open", this.authorization())
  }

  public deleteTodoById(id : number) : Observable<void> {
    return this.httpClient.delete<void>(`${this.todoUrl}/${id}`, this.authorization())
  }

}
