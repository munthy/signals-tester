import {
  Component,
  Output,
  computed,
  signal,
  EventEmitter,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'signals-tester-grid-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css'],
})
export class GridCellComponent {
  @Output() color: EventEmitter<string> = new EventEmitter();
  buttonContent = signal(0);
  buttonColor = signal('');

  constructor() {
    // effect() Requires injection context. According to the documentation: Not much used, but can be useful in some specific scenarios like logging or debugging
    effect(() => {
      console.log(`Last clicked color: ${this.buttonColor()})`);
    });
  }

  // computed() updates whenever the containing signal updates. Here used to grab and present the color name
  buttonInfo = computed(() => this.buttonColor().split('-')[1]);

  onClick(): void {
    // update() updates the signal with a new value from the existing value. Here used to increment the value by 1.
    this.buttonContent.update((value) => value + 1);

    const randomIndex = Math.floor(Math.random() * this.colors.length);
    const randomColor = this.colors[randomIndex];
    this.buttonColor.update(() => randomColor);

    this.color.emit(this.buttonColor());
  }

  colors = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-gray-500',
    'bg-red-600',
    'bg-yellow-600',
    'bg-green-600',
    'bg-blue-600',
    'bg-indigo-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-gray-600',
    'bg-red-700',
    'bg-yellow-700',
    'bg-green-700',
    'bg-blue-700',
    'bg-indigo-700',
    'bg-purple-700',
    'bg-pink-700',
    'bg-gray-700',
    'bg-red-800',
    'bg-yellow-800',
    'bg-green-800',
    'bg-blue-800',
    'bg-indigo-800',
    'bg-purple-800',
    'bg-pink-800',
  ];
}
