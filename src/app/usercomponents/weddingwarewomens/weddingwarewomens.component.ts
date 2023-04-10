import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-weddingwarewomens',
  templateUrl: './weddingwarewomens.component.html',
  styleUrls: ['./weddingwarewomens.component.css']
})
export class WeddingwarewomensComponent implements OnInit {

  products:any;
  constructor(private admincontents:AdminService){
  this.admincontents.getWeddingwareWomenContent().subscribe(data=>{
    this.products=data;
  })
  }

  ngOnInit() {
  }

}
