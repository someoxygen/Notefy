import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NoteService],
})
export class NoteComponent implements OnInit {
  constructor(private noteService: NoteService, private authService : AuthService) {}
  notes: Note[] = [];
  userId = 0;
  operationName = 'edit';
  ngOnInit() {
    this.userId = this.authService.getCurrentUserId();
    if(this.userId != 0){
      this.noteService.getNotesByUserId(this.userId).subscribe((data) => {
        this.notes = data;
      });
    }
  }
  
  deleteNote(noteId : number){
    this.noteService.deleteNoteById(noteId).subscribe(result =>{
      if(result){
        this.noteService.getNotesByUserId(this.userId).subscribe((data) => {
          this.notes = data;
        });
      }
    });
  }
}
