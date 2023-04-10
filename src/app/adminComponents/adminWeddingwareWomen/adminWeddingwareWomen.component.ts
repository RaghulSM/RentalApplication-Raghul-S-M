import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminWeddingwareWomen',
  templateUrl: './adminWeddingwareWomen.component.html',
  styleUrls: ['./adminWeddingwareWomen.component.css']
})
export class AdminWeddingwareWomenComponent implements OnInit {

  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
 constructor(private adminService:AdminService){
  this.adminService.getWeddingwareWomenContent().subscribe(data=>{
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
  this.adminService.pushWeddingwareWomenContent(Content).subscribe(data=>{
    alert("Content Added")
  })
}
deletedata(id:any){
 this.adminService.deleteWeddingwareWomenContent(id).subscribe(data=>{
  alert("Deleted");
 })
}



  ngOnInit() {
  }

}
