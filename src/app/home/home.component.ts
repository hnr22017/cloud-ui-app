import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  certificates:any;

  ngOnInit(): void {
    
    this.getdata();
  }

  getdata(){
  this.commonService.sendGetRequest().subscribe((data: any)=>{
    console.log(data);
    this.certificates = data;
  })  
}

}
