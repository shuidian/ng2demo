import { Component,OnInit } from '@angular/core';
import indexOf = ts.indexOf;
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit{


    ngOnInit(){
        var menu=document.getElementsByClassName("menu")[0];
        var menu_list=document.getElementsByClassName("menu-list")[0];
        menu.onclick=function(){
            if(menu_list.className.indexOf("active")==-1){
                menu_list.className+=' active';
            }else{
                menu_list.className='menu-list';
            }
        }
    }
}
