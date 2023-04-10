import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-washingmachine',
  templateUrl: './washingmachine.component.html',
  styleUrls: ['./washingmachine.component.css']
})
export class WashingmachineComponent implements OnInit {

  products:any;
constructor(private admincontents:AdminService){
this.admincontents.getWashingMachineContent().subscribe(data=>{
  this.products=data;
})
}

  ngOnInit() {
  }

}
