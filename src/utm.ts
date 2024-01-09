import { useEffect, useState } from "react";

type MarketingParams = {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
};

export const utm = (url: string): MarketingParams => {
    const urlObject = new URL(url);
    const urlParams = new URLSearchParams(urlObject.search);
    const utmSource = urlParams.get("utm_source") || urlParams.get("source") || urlParams.get("ref");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");
    const utmTerm = urlParams.get("utm_term");
    const utmContent = urlParams.get("utm_content");

    return {
        source: utmSource || undefined,
        medium: utmMedium || undefined,
        campaign: utmCampaign || undefined,
        term: utmTerm || undefined,
        content: utmContent || undefined,
    };
};

export const useUtm = (): MarketingParams => {
    const [params, setParams] = useState<MarketingParams>({});

    // Listen for changes to the URL
    useEffect(() => {
        const handleRouteChange = () => {
            setParams(utm(window.location.href));
        };
        window.addEventListener("popstate", handleRouteChange);
        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, []);

    // Get the initial value
    useEffect(() => {
        setParams(utm(window.location.href));
    }, []);

    return params;
};

export const addUtm = (url: string, utmParams: MarketingParams): string => {
    const urlObject = new URL(url);
    const urlParams = new URLSearchParams(urlObject.search);
    if (utmParams.source) {
        urlParams.set("utm_source", utmParams.source);
    }
    if (utmParams.medium) {
        urlParams.set("utm_medium", utmParams.medium);
    }
    if (utmParams.campaign) {
        urlParams.set("utm_campaign", utmParams.campaign);
    }
    if (utmParams.term) {
        urlParams.set("utm_term", utmParams.term);
    }
    if (utmParams.content) {
        urlParams.set("utm_content", utmParams.content);
    }
    urlObject.search = urlParams.toString();
    return urlObject.toString();
};

export const removeUtm = (url: string): string => {
    const urlObject = new URL(url);
    const urlParams = new URLSearchParams(urlObject.search);
    urlParams.delete("utm_source");
    urlParams.delete("utm_medium");
    urlParams.delete("utm_campaign");
    urlParams.delete("utm_term");
    urlParams.delete("utm_content");
    urlObject.search = urlParams.toString();
    return urlObject.toString();
};
