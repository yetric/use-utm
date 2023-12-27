import { useUtm } from "./useUtm";

describe("useUtm", () => {
    it("should return an object with the correct properties", () => {
        const urlWithUtm = "https://www.example.com/?utm_source=google&utm_medium=cpc";
        const { source, medium, campaign } = useUtm(urlWithUtm);
        expect(source).toEqual("google");
        expect(medium).toEqual("cpc");
        expect(campaign).toBeNull();
    });
});
