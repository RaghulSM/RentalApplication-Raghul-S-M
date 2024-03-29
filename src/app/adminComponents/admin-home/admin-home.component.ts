import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  image:any="";
  title:any="";
  discount:any="";
  slogan:any="";
  redirect:any="";
  products:any;
constructor(private addHome:AdminService, private deletereq:ActivatedRoute){}

ngOnInit(){
  this.addHome.getHomeContent().subscribe(data=>{
    this.products=data;
  })
}
addHomeItem(){
  let homeContent={
    image:this.image,
    title:this.title,
    discount:this.discount,
    slogan:this.slogan,
    redirect:this.redirect
  }
  this.addHome.pushHomeContent(homeContent).subscribe(data=>{
    alert("Added")
    this.ngOnInit();
  })
}
delete(id:any){
this.addHome.deleteHomeContent(id).subscribe(data=>{
  alert('Deleted');
  this.ngOnInit();
})

}
}
