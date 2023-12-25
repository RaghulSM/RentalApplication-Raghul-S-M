import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admincar',
  templateUrl: './admincar.component.html',
  styleUrls: ['./admincar.component.css']
})
export class AdmincarComponent implements OnInit{
  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  availabilityData:any;
  constructor(private adminservice:AdminService,private http:HttpClient) {
  }
  ngOnInit(){
    this.adminservice.getCarContent().subscribe(data=>{
      this.products=data;
    })
  }
  addItem(){
    let Content={
      image:this.image,
      title:this.title,
      details:this.details,
      price:this.price,
      availability:"Available"
    }
    this.adminservice.pushCarContent(Content).subscribe(data=>{
      alert("Content Added")
      this.ngOnInit();
    })
  }
  deleteData(id:any){
    this.adminservice.deleteCarContent(id).subscribe(data=>{
     alert("Deleted");
     this.ngOnInit();
    })
   }

   changeAvailabilityStatus(id:any){
    if(confirm("Admin wants to change availability Status ")){
    this.http.patch("http://localhost:3000/cars/"+id,{availability:this.availabilityData}).subscribe()
    this.ngOnInit();
  }
  }

}
