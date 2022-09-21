import { Component, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { faCoffee , faTrash , faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { ReviewProductService } from 'src/core/networks/reviewProduct.service';
@Component({
  selector: 'review-card-user',
  templateUrl: './review-card-user.component.html',
  styleUrls: ['./review-card-user.component.scss']
})
export class ReviewCardUserComponent implements OnInit {
  trash = faTrash
  edit=faPenSquare
  editing:boolean=false;
  reviewContent:string="";
  @Input() customerId;
  @Input() review;
  constructor(private reviewService:ReviewProductService) { }

  ngOnInit(): void {
  }
  submitEdit(){
    this.reviewService.update({_id:this.review._id ,reviewContent:this.reviewContent}).subscribe({
      next:(d)=>{
        this.reviewContent="";
        this.editing=false;
        console.log('review_edit',d);
      }
    })
  }
  editMyReview(){
    this.editing=true;
    this.reviewContent=this.review.reviewContent;
  }

  cancelEdit(){
    this.editing=false;
    this.reviewContent="";
  }
  convertTime(d){
    return moment(d).fromNow()
  }

  removeMyReview(id){
    this.reviewService.delete(id).subscribe({
      next:()=>{
        // this.getReviews();
      }
    })
  }







}
