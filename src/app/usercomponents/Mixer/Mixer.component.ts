import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-Mixer',
  templateUrl: './Mixer.component.html',
  styleUrls: ['./Mixer.component.css']
})
export class MixerComponent implements OnInit {

  products:any;
constructor(private admincontents:AdminService){
this.admincontents.getMixerContent().subscribe(data=>{
  this.products=data;
})
}

  ngOnInit() {
  }

}
