import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.scss'],
})
export class CalculetteComponent {
  result: string = '';

  appendToResult(value: string): string {
    return (this.result += value);
  }

  clear(): string {
    return (this.result = '');
  }

  calculate(): string | void {
    try {
      return (this.result = eval(this.result).toString());
    } catch (error) {
      this.result = 'Erreur';
      setTimeout(() => {
        this.clear();
      }, 1000);
    }
  }
}
