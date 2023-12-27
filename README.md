# use-utm

Just a simple lib for managing UTM parameters in URLs.

## Installation

```bash
npm install use-utm
```
## Usage

### `utm(url: string): UtmParameters`

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

### `addUtm(url: string, utmParams: UtmParameters): string`

```javascript
import { addUtm } from 'use-utm';

const url = "https://www.example.com/";
const utmParams = {
    source: "google",
    medium: "cpc",
    campaign: "summer",
};
const urlWithUtmParams = addUtm(url, utmParams);
```

### `removeUtm(url: string): string`

```javascript
import { removeUtm } from 'use-utm';
const url = "https://www.example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer";
const urlWithoutUtmParams = removeUtm(url);
```

### `useUtm(): UtmParameters`

```javascript
import { useUtm } from 'use-utm';

const Component = () => {
    const { source, medium, campaign, term, content } = useUtm();
    return (
        <div>
            <p>Source: {source}</p>
            <p>Medium: {medium}</p>
            <p>Campaign: {campaign}</p>
            <p>Term: {term}</p>
            <p>Content: {content}</p>
        </div>
    );
};
```    