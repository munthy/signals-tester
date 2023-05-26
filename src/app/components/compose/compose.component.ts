import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'signals-tester-compose',
  standalone: true,
  imports: [CommonModule, GridComponent, FormsModule],
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
})
export class ComposeComponent {
  lastChangedColor = signal('');
  colorList = signal<[string]>(['']);

  onColorChange(color: string): void {
    this.lastChangedColor.set(color);

    // mutate() mutates the signal value in place. Here used to add a item to the list
    this.colorList.mutate((list) => list.push(color));
    if (this.colorList().length > 5) {
      // set() sets the signal to a new value without using the existing value
      this.colorList.set(['']);
    }
  }

  onClick(): void {
    this.lastChangedColor.set('');
  }
}
