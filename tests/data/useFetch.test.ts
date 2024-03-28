import fetchDataWithOAuth, {
  BATTLE_NET_BASE_URL,
  getOAuthToken,
} from "@/data/useFetch";

const mockToken = "test-token";

const mockTokenResponse = {
  access_token: mockToken,
  token_type: "bearer",
  expires_in: 86400,
  scope: "",
};

const mockBadRequestResponse = {
  status: 400,
  statusText: "Bad Request",
};

describe("getOAuthToken", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("successfully fetches an OAuth token", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockTokenResponse),
    });

    const token = await getOAuthToken();
    expect(token).toEqual(mockToken);
  });

  it("throws an error when fetch fails", async () => {
    global.fetch = jest.fn().mockResolvedValue(mockBadRequestResponse);

    await expect(getOAuthToken()).rejects.toThrow(
      "Failed to fetch OAuth token: Bad Request"
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});

describe("fetchDataWithOAuth", () => {
  const mockToken = "test-token";
  const mockData = { key: "value" };
  const testEndpoint = `${BATTLE_NET_BASE_URL}/test-endpoint`;

  it("fetches data using an OAuth token", async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => mockTokenResponse,
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      );
    const data = await fetchDataWithOAuth(testEndpoint);
    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(2); // First for the token, second for the data
    expect(fetch).toHaveBeenLastCalledWith(testEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${mockToken}`,
      },
    });
  });

  it("throws an error when fetch for geOAuthToken fails", async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockBadRequestResponse));

    await expect(fetchDataWithOAuth(testEndpoint)).rejects.toThrow(
      "Failed to fetch OAuth token: Bad Request"
    );
  });

  it("throws an error when fetch for data fails", async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => mockTokenResponse,
        })
      )
      .mockImplementationOnce(() => Promise.resolve(mockBadRequestResponse));

    await expect(fetchDataWithOAuth(testEndpoint)).rejects.toThrow(
      "Failed to fetch data: Bad Request"
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
