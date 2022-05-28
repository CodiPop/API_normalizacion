export const CUNDINAMARCA = (rawDepartamento) => {
  return {
    departamentoNormalizado: "Cundinamarca",
    departmentoNoNormalizado: rawDepartamento,
  };
};
export const BOLIVAR = (rawDepartamento) => {
  return {
    departamentoNormalizado: "Bolívar",
    departmentoNoNormalizado: rawDepartamento,
  };
};
export const ATLANTICO = (rawDepartamento) => {
  return {
    departamentoNormalizado: "Atlántico",
    departmentoNoNormalizado: rawDepartamento,
  };
};
export const MAGDALENA = (rawDepartamento) => {
  return {
    departamentoNormalizado: "Magdalena",
    departmentoNoNormalizado: rawDepartamento,
  };
};

export const ERROR = { message: "Error en la ciudad" };
export const WELCOME = { message: "No haz enviado ningun departamento" };
