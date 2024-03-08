import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

type Item = { id: number; name: string };

const collection = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
] as Item[];

@Component({
  selector: 'app-flow-control',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './flow-control.component.html',
  styleUrl: './flow-control.component.scss',
})
export class FlowControlComponent {
  isChecked = signal(false);
  collection = collection as Item[];
  selectedValue = signal<number | null>(null);
  radioValues = [
    { id: 1, displayName: 'First' },
    { id: 2, displayName: 'Second' },
    { id: 3, displayName: 'Third' },
    { id: 4, displayName: 'Forth' },
  ];
}
