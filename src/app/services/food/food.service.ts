import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodByTag(tag:string):Foods[]{
    return tag=='All'?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));

  }
  getAllTag():Tag[]{
    return [
      {name:'All',count:8},
      {name:'FastFood',count:6},
      {name:'Pizza',count:4},
      {name:'Lunch',count:5},
      {name:'SlowFood',count:2},
      {name:'Hamburger',count:1},
      {name:'Fry',count:1},
      {name:'Soup',count:1},

      
    ]
  }
  getAll():Foods[]{
    return [
      // '/assets/1.jpg',
      // '/assets/2.jpg',
      // '/assets/3.jpg',
      // '/assets/4.jpg',
      // '/assets/5.jpg',
      // '/assets/6.jpg',
      // '/assets/7.jpg',
      // '/assets/8.jpg',
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/1.jpg',
        tags:['FastFood','Pizza','Lunch']

      },
      {
        id:2,
        name:'Metball',
        cookTime:'20-30',
        price:20,
        favorite:true,
        origins:['persia','middle east','china'],
        star:4.7,
        imageUrl:'/assets/2.jpg',
        tags:['SlowFood','Lunch']

      },
      {
        id:3,
        name:'Hamburger',
        cookTime:'10-15',
        price:5,
        favorite:false,
        origins:['germany','us'],
        star:3.5,
        imageUrl:'/assets/3.jpg',
        tags:['FastFood','Hamburger']

      },
      {
        id:4,
        name:'Fried Potatos',
        cookTime:'15-20',
        price:2,
        favorite:false,
        origins:['belgium','france'],
        star:4.3,
        imageUrl:'/assets/4.jpg',
        tags:['FastFood','Fry']

      },
      {
        id:5,
        name:'Chicken Soup' ,
        cookTime:'40-50',
        price:11,
        favorite:false,
        origins:['india','asia'],
        star:3.0,
        imageUrl:'/assets/5.jpg',
        tags:['SlowFood','Soup']

      },
      {
        id:6,
        name:'Vegetables Pizza',
        cookTime:'40-50',
        price:9,
        favorite:false,
        origins:['italy'],
        star:4.0,
        imageUrl:'/assets/3.jpg',
        tags:['FastFood','Pizza','Lunch']

      },
      {
        id:7,
        name:'Vegetables spicy Pizza',
        cookTime:'20-30',
        price:10,
        favorite:false,
        origins:['indian'],
        star:4.0,
        imageUrl:'/assets/7.jpg',
        tags:['FastFood','Pizza','Lunch']

      },
      {
        id:8,
        name:'Vergetables burgur',
        cookTime:'10-15',
        price:5,
        favorite:false,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/8.jpg',
        tags:['FastFood','Pizza','Lunch']

      },

      
    ]

  }
}
