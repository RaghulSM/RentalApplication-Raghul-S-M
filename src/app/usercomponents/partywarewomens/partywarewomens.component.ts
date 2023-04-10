import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-partywarewomens',
  templateUrl: './partywarewomens.component.html',
  styleUrls: ['./partywarewomens.component.css']
})
export class PartywarewomensComponent implements OnInit {

  products:any;
constructor(private admincontents:AdminService){
this.admincontents.getPartywareWomenContent().subscribe(data=>{
  this.products=data;
})
}

  ngOnInit() {
  }

}
