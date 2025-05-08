import { GermanNumberPipe } from './german-number.pipe';

describe('GermanNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new GermanNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
