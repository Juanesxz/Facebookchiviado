import agregar from "../config";
document.getElementById("iniciar").addEventListener("click", () => {
  datos = {
    nombre: "juanesxz",
    apellido: "Bueno",
    años: "24",
  };

  const respuesta = agregar(datos);
  console.log(respuesta);
});
