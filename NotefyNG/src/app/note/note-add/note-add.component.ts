import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Note } from '../../models/note';
import { AlertifyService } from '../../services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
  providers:[NoteService]
})
export class NoteAddComponent implements OnInit {
  operationName = '';
  constructor(
    private noteService : NoteService,
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private userService : UserService,
    private activatedRoute : ActivatedRoute
  ) { }
  note : Note = new Note;
  noteForm : FormGroup;

  createNoteForm(){
    this.noteForm = this.formBuilder.group(
      {name : ["", Validators.required],
      note : ["", Validators.required]});
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.operationName = params['operationName'];
      // if(params['operationName'] == 'edit'){

      // }
    });
    this.createNoteForm();
  }

  add(){
    if(this.noteForm.valid){
      this.note = Object.assign({},this.noteForm.value);
      this.note.noteDate = new Date();
      this.note.userId = this.authService.getCurrentUserId();
      this.userService.getUserById(this.note.userId).subscribe(result => {
        this.note.User = result;
      });
      this.noteService.add(this.note);
    }
  }

  edit(){
    if(this.noteForm.valid){
      this.note = Object.assign({},this.noteForm.value);
      this.note.userId = this.authService.getCurrentUserId();
      this.userService.getUserById(this.note.userId).subscribe(result => {
        this.note.User = result;
      });
      this.noteService.edit(this.note);
    }
  }

}
