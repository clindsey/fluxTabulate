import alea from 'alea';

export default function (seed) {
  return `#${Math.floor(alea(seed)() * 0xffffff).toString(16)}`;
}
