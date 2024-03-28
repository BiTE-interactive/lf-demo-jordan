import "@testing-library/jest-dom";

import { back, push } from "@/__mocks__";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push,
    back,
  }),
}));
