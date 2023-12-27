import { addUtm, utm } from "./utm";

describe("useUtm", () => {
    it("should return an object with the correct properties", () => {
        const urlWithUtm = "https://www.example.com/?utm_source=google&utm_medium=cpc";
        const { source, medium, campaign } = utm(urlWithUtm);
        expect(source).toEqual("google");
        expect(medium).toEqual("cpc");
        expect(campaign).toBeUndefined();
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
            "https://www.example.com/?utm_source=google&utm_medium=cpc&utm_campaign=summer",
        );
    });
});
