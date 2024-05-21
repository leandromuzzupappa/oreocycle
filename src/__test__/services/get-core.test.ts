import { getCore } from "@services/get-core";
import { coreMock } from "@data/mock/core";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(coreMock),
  }),
) as jest.Mock;

describe("get core data", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return the mock data if DEBUG is true", async () => {
    process.env.DEBUG = "true";

    const data = await getCore();
    expect(data).toEqual(coreMock);
  });

  it("should return the core data", async () => {
    const data = await getCore();
    expect(data).toEqual(coreMock);
  });
});
