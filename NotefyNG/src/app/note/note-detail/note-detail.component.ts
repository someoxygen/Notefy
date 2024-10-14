import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note';
// import { Photo } from '../../models/photo';
//import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
  providers: [NoteService],
})
export class NoteDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService
  ) {}
  note: Note = new Note();
  //photos: Photo[] = [];
  // galleryOptions: GalleryItem[] = [];
  // galleryImages: ImageItem[] = [];
  // images: GalleryItem[] = [];
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getNoteById(params['noteId']);
    });
  }

  getNoteById(noteId: number) {
    this.noteService.getNoteById(noteId).subscribe((data) => {
      this.note = data;
      //this.getPhotosByCity(cityId);
    });
  }

  // getPhotosByCity(cityId: number){
  //   this.noteService.getPhotosByCity(cityId).subscribe(data =>{
  //     this.photos = data;
  //     //this.setGallery();
  //     this.getImages();
  //   });
  // }

  // getImages(){
  //   this.images = [];
  //   for(let i = 0; i< this.city.photos.length; i++){
  //     let imageItem = new ImageItem({ src: this.city.photos[i].url , thumb: this.city.photos[i].url });
  //     this.images.push(imageItem);
  //   }
  //   return this.images;
  // }

  // setGallery(){
  //   this.images = [
  //     new ImageItem({ src: 'IMAGE_SRC_URL', thumb: 'IMAGE_THUMBNAIL_URL' })),
  //     // ... more items
  //   ];
  // }
  // setGallery() {
  //   this.galleryOptions = [
  //     {
  //       width: '100%',
  //       height: '400px',
  //       thumbnailsColumns: 4,
  //       imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //       breakpoint: 800,
  //       width: '100%',
  //       height: '600px',
  //       imagePercent: 80,
  //       thumbnailsPercent: 20,
  //       thumbnailsMargin: 20,
  //       thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //       breakpoint: 400,
  //       preview: false
  //     }
  //   ];

  //   this.galleryImages = this.getImages();
  // }
}
