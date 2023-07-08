import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers:[EnrollService]
})
export class JavascriptComponent {
title="JavaScript";
// OnEnroll(){
//   alert("Thank You for enrolling to"+this.title+"course");
//  }

constructor(private enrollService:EnrollService){

}


OnEnroll(){
   this.enrollService.OnEnrollClicked(this.title);
}

// OnEnroll(){
//      const enrollService=new EnrollService(); //instance of class
//      enrollService.OnEnrollClicked(this.title);
//   }


}
