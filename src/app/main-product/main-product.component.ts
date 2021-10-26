import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
listProduct : product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct = [
      {
        id: 12,
        title: 'T-shirt 1',
        description: 'Lorem ipsum donf fkdhba kdjfu',
        quantity: 10,
        prix: 5,
        picture: 'https://seagale.fr/1148-large_default/linen-t-shirt.jpg',
        nbrLike:15 
      },
      {
        id: 13,
        title: 'T-shirt 2',
        description: 'Lorem ipsum donf fkdhba kdjfu',
        quantity: 10,
        prix: 5,
        picture: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf75.png',
        nbrLike:15 
      },
      {
        id: 14,
        title: 'T-shirt 3',
        description: 'Blue  T-shirt',
        quantity: 5,
        prix: 5,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVz0gEPE4KIM6d_zceKdAAKPpfrA1RiFyhfEtnMrCzE5sGiE31JySPmRD6LbSq4H5_EzI&usqp=CAU',
        nbrLike:15 
      }
      
    ]
  }
  like(product:product){
    product.nbrLike++;
    console.log(this.listProduct)
  }

}
