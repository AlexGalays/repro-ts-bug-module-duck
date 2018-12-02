import 'space-lift/es/all';
import lift, { Option } from 'space-lift';

// This should compile
function find(array: string[], str: string): Option<string> {
  return lift(array).find(s => s === str);
}

find([], "");