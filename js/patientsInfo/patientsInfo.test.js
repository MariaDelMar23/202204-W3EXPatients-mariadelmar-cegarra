import patients from "../patients.js";
import patientsInfo from "./patientsInfo";

describe("Given a patientsInfo function", () => {
  describe("When it receives an array of patients with 1 man being diabetic", () => {
    test("Then it shoul return 1", () => {
      const expectedPatientsResult = 1;

      const patientsResult = patientsInfo(patients).nDiabeticMen;

      expect(patientsResult).toBe(expectedPatientsResult);
    });
  });
});
