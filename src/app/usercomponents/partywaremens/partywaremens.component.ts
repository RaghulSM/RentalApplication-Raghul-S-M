import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-partywaremens',
  templateUrl: './partywaremens.component.html',
  styleUrls: ['./partywaremens.component.css']
})
export class PartywaremensComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getPartywareMenContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
