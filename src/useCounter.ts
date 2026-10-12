// build 470a2db14e
// (auto) 496420
import { useState } from 'react';
export default function useCounter(init = 0) {
  const [n, setN] = useState(init);
  return { n, inc: () => setN((x) => x + 1), dec: () => setN((x) => x - 1) };
}
