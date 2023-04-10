import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminPartywareWomen',
  templateUrl: './adminPartywareWomen.component.html',
  styleUrls: ['./adminPartywareWomen.component.css']
})
export class AdminPartywareWomenComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
 constructor(private adminService:AdminService){
  this.adminService.getPartywareWomenContent().subscribe(data=>{
    this.products=data;
  })
 }
 addItem(){
  let Content={
    image:this.image,
    title:this.title,
    details:this.details,
    price:this.price
  }
  this.adminService.pushPartywareWomenContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deletePartywareWomenContent(id).subscribe(data=>{
  alert("Deleted");
 })
}


  ngOnInit() {
  }

}
