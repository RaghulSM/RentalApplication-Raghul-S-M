import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-Grinder',
  templateUrl: './Grinder.component.html',
  styleUrls: ['./Grinder.component.css']
})
export class GrinderComponent implements OnInit {

  products:any;
constructor(private admincontents:AdminService){
this.admincontents.getGrinderContent().subscribe(data=>{
  this.products=data;
})
}

  ngOnInit() {
  }

}
