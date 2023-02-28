import { Component } from '@angular/core';

interface Images
{
  imageSrc : string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  selectedIndex : number = 0;

  images : Images[] = [
    { imageSrc : '../../../assets/Grow-Trees-On-the-path-to-environment-sustainability.png'},
    { imageSrc : '../../../assets/Grow-Trees-On-the-path-to-environment-sustainability.png'},
    { imageSrc : '../../../assets/Grow-Trees-On-the-path-to-environment-sustainability.png'},
    { imageSrc : '../../../assets/Grow-Trees-On-the-path-to-environment-sustainability.png'}
  ];
}
