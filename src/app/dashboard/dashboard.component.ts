import { Component, OnInit } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.canvasjs1();
  }
  canvasjs1() {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [100, 124, 137, 145, 152, 185, 150, 147, 136, 122, 117, 115],
          backgroundColor: [
            '#ddac30'
          ],
        }]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: false
          }
        },
        stacked: false,

        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left'
          }
        }
      },
    });
  }

}
