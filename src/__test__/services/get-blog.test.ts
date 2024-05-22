import { getBlog } from "@services/get-blog";
import { blogMock } from "@data/mock/blog";

describe("get blog data", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return the blog data", async () => {
    const data = await getBlog();
    expect(data).toEqual(blogMock);
  });
});
