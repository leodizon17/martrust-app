import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "main-app",
    templateUrl: './main-app.component.html',
    styleUrls: [
        './main-app.component.scss'
    ]
})

export class MainAppComponent implements OnInit{

    redirectUrl: string;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private _route: ActivatedRoute,
    ) { 
        
    }

    ngOnInit(): void {
    }

    onKeydown(event) {
        this.onSubmit();
    }

    onSubmit() {
    }
}