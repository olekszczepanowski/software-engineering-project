import { getUserData, parseDate } from "@/app/users/[slug]/page";
import { User } from "@/app/users/page";
import { describe, it, expect, vi } from "vitest";

describe("parseDate", () => {
  it("should parse a valid date string in the format yyyy-MM-dd", () => {
    const date = "2025-01-21";
    const result = parseDate(date);
    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(21);
  });

  it("should return the current date when given an invalid date string", () => {
    const invalidDate = "invalid-date";
    const result = parseDate(invalidDate);
    const currentDate = new Date();
    expect(result).toBeInstanceOf(Date);
    expect(result.getFullYear()).toBe(currentDate.getFullYear());
    expect(result.getMonth()).toBe(currentDate.getMonth());
    expect(result.getDate()).toBe(currentDate.getDate());
  });
});
describe("getUserData", () => {
  it("should fetch user data and return a user object", async () => {
    const mockUser: User = {
      id: 1,
      name: "John",
      surname: "Doe",
      email: "john.doe@example.com",
      password: "password1",
      distanceTraveled: 1000,
      phoneNumber: "123456789",
      birthDate: "1990-01-01",
      joinDate: "2020-01-01",
    };

    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => mockUser,
    } as Response);

    const slug = "1";
    const result = await getUserData(slug);

    expect(result).toEqual(mockUser);
    expect(result.name).toBe("John");
    expect(result.surname).toBe("Doe");
    expect(result.email).toBe("john.doe@example.com");
    expect(result.phoneNumber).toBe("123456789");
    expect(result.birthDate).toBe("1990-01-01");
    expect(result.joinDate).toBe("2020-01-01");
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:3333/users/${slug}`
    );
  });

  it("should handle errors when fetching user data", async () => {
    vi.spyOn(global, "fetch").mockRejectedValueOnce(
      new Error("Failed to fetch")
    );

    const slug = "1";

    try {
      await getUserData(slug);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Failed to fetch");
    }
  });
});
