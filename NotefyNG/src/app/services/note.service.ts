import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { AlertifyService } from './alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpClient: HttpClient,
    private alertifyService : AlertifyService,
    private router : Router
  ) {}
  path = 'http://localhost:5013/api/';

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.path + 'notes');
  }
  getNoteById(noteId : number): Observable<Note>{
    return this.httpClient.get<Note>(this.path + "notes/detail/?id=" + noteId);
  }
  deleteNoteById(noteId : number): Observable<Note>{
    return this.httpClient.get<Note>(this.path + "notes/deleteNoteById/?noteId=" + noteId);
  }
  getNotesByUserId(userId : number): Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.path + "notes/getNotesByUserId/?userId=" + userId);
  }
  // getPhotosByCity(cityId : number) : Observable<Photo[]>{
  //   return this.httpClient.get<Photo[]>(this.path + "cities/photos/?cityId=" + cityId);
  // }
  add(note : Note){
    this.httpClient.post<Note>(this.path + 'Notes/add', note).subscribe(data => {
      this.alertifyService.success("Note successfully added.");
      this.router.navigateByUrl('/noteDetail/' + data["id"]);
    });
  }
  edit(note : Note){
    this.httpClient.post<Note>(this.path + 'Notes/edit', note).subscribe(data => {
      this.alertifyService.success("Note successfully updated.");
      this.router.navigateByUrl('/noteDetail/' + data["id"]);
    });
  }
}
