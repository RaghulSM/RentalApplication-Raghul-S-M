import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-weddingwaremens',
  templateUrl: './weddingwaremens.component.html',
  styleUrls: ['./weddingwaremens.component.css']
})
export class WeddingwaremensComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getWeddingwareMenContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
