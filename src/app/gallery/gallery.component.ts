import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() pictureData: Picture[] = [];
  @Input() showCount = false;

  previewPicture = false;
  showMask = false;
  controls = true;
  currentPreviewPicture: Picture = this.pictureData[0]; 
  currentIndex = 0;
  totalPictureCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalPictureCount = this.pictureData.length;
  }

  onPreviewPicture(index: number): void {
    // 사진을 클릭하면 발생하는 이벤트 -> 사진 Preview(원래 크기 유지, 확대)
    this.showMask = true;
    this.showCount = true;
    this.previewPicture = true;
    this.currentIndex = index;
    this.currentPreviewPicture = this.pictureData[index];
  }

  closePreviewPicture(): void { // X(닫기) 버튼을 눌렀을 때 발생하는 이벤트
    this.showMask = false; 
    this.showCount = false;
    this.previewPicture = false;
  }

  clickPrevButton(): void { // prev 버튼을 눌렀을 때 발생하는 이벤트
    if (this.currentIndex == 0) {
      this.currentIndex = 0; // 0까지만 감소하도록 제한
    } else {
      this.currentIndex--;
      this.closePreviewPicture() // 현재 열려 있는 preview 이미지를 닫음 (index 업데이트 전)
      this.onPreviewPicture(this.currentIndex); // index 업데이트 후의 preview 이미지를 열어줌
    }
  }

  clickNextButton(): void { // next 버튼을 눌렀을 때 발생하는 이벤트
    if (this.currentIndex == this.totalPictureCount - 1) { 
      this.currentIndex = this.totalPictureCount - 1; // totalPictureCount - 1까지만 증가하도록 제한
    } else {
      this.currentIndex++;
    }
    this.closePreviewPicture() // 현재 열려 있는 preview 이미지를 닫음 (index 업데이트 전)
    this.onPreviewPicture(this.currentIndex); // index 업데이트 후의 preview 이미지를 열어줌
  }
}
