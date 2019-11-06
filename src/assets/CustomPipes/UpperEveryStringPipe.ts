import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'uppereverystring' })
export class UpperStringPipe implements PipeTransform {
    transform(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}