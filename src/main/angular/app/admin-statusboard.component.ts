import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {DataSource} from "@angular/cdk/collections";

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-admin-statusboard',
  template: `
    <div class="example-header">
      <mat-form-field>
        <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
      </mat-form-field>
    </div>

    <div class="example-container mat-elevation-z8">

      <mat-table [dataSource]="dataSource" matSort>

        <!-- ID Column -->
        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>
          <mat-cell *matCellDef="let row"> {{row.id}} </mat-cell>
        </ng-container>

        <!-- Progress Column -->
        <ng-container matColumnDef="progress">
          <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>
          <mat-cell *matCellDef="let row"> {{row.progress}}% </mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
          <mat-cell *matCellDef="let row"> {{row.name}} </mat-cell>
        </ng-container>

        <!-- Color Column -->
        <ng-container matColumnDef="color">
          <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>
          <mat-cell *matCellDef="let row" [style.color]="row.color"> {{row.color}} </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;">
        </mat-row>
      </mat-table>

      <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
    </div>
  `,
  styles: [``]
})
export class AdminStatusBoardComponent {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<StatusRow>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient) {
    this.dataSource = new MatTableDataSource<StatusRow>([]);
    // this.httpClient.get<StatusRow[]>('/api/a/status')
    //   .subscribe(rows => {console.log(rows);this.dataSource.data = rows;});
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface StatusRow {
  key: string;
  value: string;
  color: string;
}
