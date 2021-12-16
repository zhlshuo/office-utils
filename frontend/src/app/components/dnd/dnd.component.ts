import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

import { MessageService } from 'src/app/services/file-transfer/service';


@Component({
    selector: 'dnd',
    templateUrl: './dnd.component.html',
    styleUrls: ['./dnd.component.scss'],
  })
  export class DNDComponent implements OnInit {

    ngOnInit() {
    }

    private subject: string = '';
    public files: NgxFileDropEntry[] = [];

    constructor(private message_service: MessageService){
    }

    public dropped(files: NgxFileDropEntry[]) {
        this.files = files;
        for (const droppedFile of files) {
    
          // Is it a file?
          if (droppedFile.fileEntry.isFile) {
            const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
            fileEntry.file((file: File) => {
    
              // Here you can access the real file
              console.log(droppedFile.relativePath, file);
    
              /**
              // You could upload it like this:
              const formData = new FormData()
              formData.append('logo', file, relativePath)
    
              // Headers
              const headers = new HttpHeaders({
                'security-token': 'mytoken'
              })
    
              this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
              .subscribe(data => {
                // Sanitized logo returned from backend
              })
              **/
    
            });
          } else {
            // It was a directory (empty directories are added, otherwise only files)
            const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
            console.log(droppedFile.relativePath, fileEntry);
          }
        }
      }
    
      public fileOver(event: any){
        console.log(event);
      }
    
      public fileLeave(event: any){
        console.log(event);
      }
  }