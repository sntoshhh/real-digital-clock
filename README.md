# real-digital-clock

> Classic 7-segment based real digital clock for React apps!  
> Fully SVG-based, and works out of the box with React 18+.

![NPM Version](https://img.shields.io/npm/v/real-digital-clock.svg)
![License](https://img.shields.io/npm/l/real-digital-clock.svg)
![Downloads](https://img.shields.io/npm/dm/real-digital-clock.svg)

---

## ✨ Features

- **7-segment digital display** — authentic retro look with format, hh:mm.
- **SVG-based** — sharp rendering at any resolution.
- **No fonts required** — pure vector rendering.
- **Customizable colors, size, and style**.
- **Lightweight** — minimal bundle size.
- **Written in TypeScript** with type definitions included.

---

## 📦 Installation

```bash
npm install real-digital-clock
# or
yarn add real-digital-clock
# or
pnpm add real-digital-clock
```

---

## 🚀 Usage

> Use as a live-clock

#### When no props are passed, DigitalClockDisplay component renders a live-clock.

```javascript
import React from "react";
import { DigitalClockDisplay } from "real-digital-clock";

export const App: React.FC = () => {
  return (
    <>
      <DigitalClockDisplay />
    </>
  );
};
```

> Use to display a static time-stamp in hh:mm format

#### Pass in a Date object to the prop 'jsTime' and the component will render the timestamp in hh:mm format

```javascript
import React from "react";
import { DigitalClockDisplay } from "real-digital-clock";

export const App: React.FC = () => {
  return (
    <>
      <DigitalClockDisplay jsTime={new Date()} />
    </>
  );
};

```
