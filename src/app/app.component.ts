import { Component } from '@angular/core';
import * as path from 'path'
import * as H5P from '@lumieducation/h5p-server';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h5p-test';
  editor = H5P.H5PEditor;

  // async editorh5p(): Promise<void> {
  //   console.log("entro");

  //   const H5P = require('@lumieducation/h5p-server');

  //   const h5pEditor = H5P.fs(
  //     await new H5P.H5PConfig(
  //         new H5P.fsImplementations.JsonStorage(
  //             path.resolve('examples/config.json') // the path on the local disc
  //             // where the configuration file is stored
  //         )
  //     ).load(),
  //     path.resolve('h5p/libraries'), // the path on the local disc where libraries
  //     // should be stored
  //     path.resolve('h5p/temporary-storage'), // the path on the local disc where
  //     // temporary files (uploads) should
  //     // be stored
  //     path.resolve('h5p/content') // the path on the local disc where content is
  //     // stored
  // );

  // }
}
