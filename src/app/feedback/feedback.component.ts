import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  feedback = {
    name: '',
    email:'',
    occupation:'',
    comment:''
  }
  result:Object;
  userDetails:Object;

  constructor(private data:DataService) { }

  ngOnInit() {
  }

  submitFeedback(){

    

    this.data.sendEmail(this.feedback).subscribe(
      data => this.result = data
    )

  }

}
