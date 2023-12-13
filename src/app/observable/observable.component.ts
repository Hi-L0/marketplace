import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, interval } from 'rxjs';

// const subject= new Subject<number>()
// subject.subscribe({
//   next:(v)=>{
//     console.log('observer A'+ v)
//   }
// })
// subject.subscribe({
//   next: (v)=>{
//     console.log(`observer B ${v}`)
//   }
// })

// subject.next(1)
// subject.next(2)
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})

export class ObservableComponent implements OnInit,OnDestroy {
  seconds:number=0;
  counterSubscription !:Subscription;

  ngOnInit(): void {
    const counter=interval(1000);
    this.counterSubscription=counter.subscribe({
      next:(value)=>{this.seconds=value}, //notify subscriber
      error:(err)=>{console.log('error',err)},
      complete:()=>{
        console.log('observable est termine');
      }
    });
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe()
  }
}
