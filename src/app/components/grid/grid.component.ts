import { Component, Output, signal, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCellComponent } from '../grid-cell/grid-cell.component';

@Component({
  selector: 'signals-tester-grid',
  standalone: true,
  imports: [CommonModule, GridCellComponent],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Output() colorOut: EventEmitter<string> = new EventEmitter();
  rows = signal([1, 2, 3, 4]);
  cols = signal([1, 2, 3, 4, 5, 6, 7]);

  updateColor(color: string) {
    this.colorOut.emit(color);
  }
}
