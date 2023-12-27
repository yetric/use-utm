# use-utm

Just a simple lib for managing UTM parameters in URLs.

## Installation

```bash
npm install use-utm
```
## Usage

```javascript
import { utm } from 'use-utm';
const {
    source,
    medium,
    campaign,
    term,
    content 
} = utm(window.location.href);
```