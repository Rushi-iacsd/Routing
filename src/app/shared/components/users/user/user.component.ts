import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })
export class UserComponent implements OnInit{

    userId!: number;
    constructor(private _route : ActivatedRoute){}

       ngOnInit(): void {
        console.log(this._route.snapshot)
        this.userId =+this._route.snapshot.params['userId']
        
        }
        
}


