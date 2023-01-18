import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Egzamin_App';
  courses : string[] = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

  form = new FormGroup({
    name : new FormControl(''),
    number : new FormControl('')
  });

  onSubmit() {
    const name = this.form.get("name")?.value;
    const number = parseInt(<string>this.form.get("number")?.value) - 1;


    console.log(name);

    if(number < this.courses.length) {
      console.log(this.courses[number])
    } else {
      console.log("Nieprawidłowy numer kursu")
    }
  }
}
