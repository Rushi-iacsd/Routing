import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavclick]'
})
export class NavclickDirective {

  constructor() { }


  @HostListener("click",["$event"])
    onnavclick(eve : Event) {
      // console.log(eve.target)
       let ele = eve.target as HTMLElement
      //  console.log(ele.closest("button")?.nextElementSibling)    
       ele.closest("button")?.nextElementSibling?.classList.toggle("show")

      }
}
