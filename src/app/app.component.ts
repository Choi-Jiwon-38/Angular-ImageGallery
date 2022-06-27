import { Component } from '@angular/core';
import { Picture } from './picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageGallery';

  data: Picture[] = [
    { // Image Soure를 내부("../assets")에서 받아옴
      src: "../assets/img1.jpg",
      idx: 1
    },
    {
      src: "../assets/img2.jpg",
      idx: 2
    },
    {
      src: "../assets/img3.jpg",
      idx: 3
    },
    {
      src: "../assets/img4.jpg",
      idx: 4
    },
    {
      src: "../assets/img5.jpg",
      idx: 5
    },
    { // Image Source를 외부(Internet에 업로드된 사진)로부터 받는 것도 가능함.
      src: "http://www.designerspics.com/wp-content/uploads/2014/10/paper_people_free_photo1.jpg",
      idx: 6
    },
    {
      src: "http://www.designerspics.com/wp-content/uploads/2015/01/tablet_free_photo1.jpg",
      idx: 7
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/06/19/14/14/flower-7272005_1280.jpg",
      idx: 8
    },
    {
      src: "http://www.designerspics.com/wp-content/uploads/2015/01/workstation_free_photo.jpg",
      idx: 9
    },
    {
      src: "http://www.designerspics.com/wp-content/uploads/2014/07/laptop_free_photo.jpg",
      idx: 10
    },
    {
      src: "https://img1.daumcdn.net/thumb/S640x360/?fname=https://t1.daumcdn.net/news/202202/11/harmony/0c240e549ca04f2aa0502599a5d036ec.jpg",
      idx: 11
    },
    {
      src: "https://i.pinimg.com/736x/ec/c1/d7/ecc1d7b768f3386447f6cb1de74c22a6.jpg",
      idx: 12
    },
    {
      src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/15578551_1310692015656718_619952527180684232_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=T8I97BeBEIIAX8MTter&_nc_oc=AQnGP6g7iJ47Jbo8xDPxsEZfQVoJ5SUETkkCIeLBc9uLGRQH6XK-_v9xbOXsirUOnDI&_nc_ht=scontent-ssn1-1.xx&oh=00_AT-UOpBAf38c2H_DLT5I5aUviP1C8JsjR9_wT92vEZ_vhA&oe=62DF7886",
      idx: 13
    },
  ]
}
