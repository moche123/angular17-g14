import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  firstName = signal('Pankaj');
  lastName = signal('Parkar');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  updateFirstName(name: string) {
    // this.firstName.update(name => name + 1);
    this.firstName.set(name);
  }
}
