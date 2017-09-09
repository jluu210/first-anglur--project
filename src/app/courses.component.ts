
import { CoursesService } from './courses.service';
import{ Component } from '@angular/core';

@Component({
    //what this component handles using an HTML tag
    selector: 'courses',
    //html mark up later added in another folder
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>
        <img [src]="imageUrl" /> 
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <input #email (keyup.enter) ="onKeyUp(email.value)" />
        <button class ="btn btn-primary" [class.active]="isActive" (click)="onSave($event)"> SAVE </button>
        `
})

export class CoursesComponent{
    isActive = true;
    title = "List of Courses";
    courses;

    imageUrl = "http://lorempixel.com/400/200";

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onKeyUp(email){
        console.log(email);
    }

    getTitle(){
        return this.title;
    }

    onSave($event){
        //[style.backgroundColor] ="isActive ? 'blue : 'white'
        $event.stopPropagation();
        console.log("Button was clicked", $event);

    }

}