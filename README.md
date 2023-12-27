# use-utm

Just a simple lib for managing UTM parameters in URLs.

## Installation

```bash
npm install use-utm
```
## Usage

```javascript
import { useUtm } from 'use-utm';
const {
    source,
    medium,
    campaign,
    term,
    content 
} = useUtm(window.location.href);
```