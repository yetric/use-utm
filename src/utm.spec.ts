import { addUtm, removeUtm, utm } from "./utm";

describe("useUtm", () => {
    it("should return an object with the correct properties", () => {
        const urlWithUtm = "https://www.example.com/?utm_source=google&utm_medium=cpc";
        const { source, medium, campaign } = utm(urlWithUtm);
        expect(source).toEqual("google");
        expect(medium).toEqual("cpc");
        expect(campaign).toBeUndefined();
    });

    it("should be able to parse ref as source", () => {
        const urlWithRef = "https://www.example.com/?ref=google";
        const { source } = utm(urlWithRef);
        expect(source).toEqual("google");
    });

    it("should be able to parse source as source", () => {
        const urlWithSource = "https://www.example.com/?source=google";
        const { source } = utm(urlWithSource);
        expect(source).toEqual("google");
    });

    it("Should add utm params to a url", () => {
        const url = "https://www.example.com/";
        const utmParams = {
            source: "google",
            medium: "cpc",
            campaign: "summer",
        };
        const urlWithUtmParams = addUtm(url, utmParams);
        expect(urlWithUtmParams).toEqual(
            "https://www.example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer"
        );
    });

    it("Should remove utm params from a url", () => {
        const url = "https://www.example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer";
        const urlWithoutUtmParams = removeUtm(url);
        expect(urlWithoutUtmParams).toEqual("https://www.example.com/");
    });
});
