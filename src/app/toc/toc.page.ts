import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters =[
    {   
    title: "Chapter 1 - The Beginning",
    url: "/chapter1"
  },
  {   
    title: "Chapter 2 - As the Story evolves",
    url: "/chapter2"
  },
  {   
    title: "Chapter 3 - And again",
    url: "/chapter3"
  },
  {   
    title: "Chapter 4 - Lets meet",
    url: "/chapter4"
  },
  {   
    title: "Appendix - The End",
    url: "/theend"
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
