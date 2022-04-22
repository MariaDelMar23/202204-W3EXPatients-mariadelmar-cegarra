const patientsInfo = (patients) => {
  const patientsCopy = patients.map((patient) => [...patient]);

  let nPatients = patientsCopy.map(() => nPatients++);

  let nAdults = patientsCopy.filter((patient) =>
    patient.patient.age >= 18 ? nAdults++ : nAdults
  );

  let nDiabeticMen = patientsCopy.filter((patient) =>
    patient.patient.sexo === "M" && patient.diet === "Diabetes"
      ? nDiabeticMen++
      : nDiabeticMen
  );
  return { nPatients, nAdults, nDiabeticMen };
};

export default patientsInfo;
