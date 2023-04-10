import { Component} from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admincar',
  templateUrl: './admincar.component.html',
  styleUrls: ['./admincar.component.css']
})
export class AdmincarComponent{
  image:any="";
  title:any="";
  details:any="";
  price:any="";
  products:any;
  constructor(private adminservice:AdminService) {
    this.adminservice.getCarContent().subscribe(data=>{
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
    this.adminservice.pushCarContent(Content).subscribe(data=>{
      alert("Content Added")
    })
  }
  deletedata(id:any){
    this.adminservice.deleteCarContent(id).subscribe(data=>{
     alert("Deleted");
    })
   }

}
