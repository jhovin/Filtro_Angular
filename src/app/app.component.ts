import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Heroes';
  heroes:any[]= [];
  canFly = true;
  mutate = true;
  title2 = "Héroes que vuelan";
  title3 = "Todos los héroes";
  reset(){this.heroes=[]}
  constructor(){
    this.heroes=[];
  }
  addHero(name: String){
    name = name.trim();
    if(!name){return;}
    let hero = {name, canFly: this.canFly};
    this.heroes = this.heroes.concat(hero);
  }
}