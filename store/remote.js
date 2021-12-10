import request from "request";

// vamos a crear un contructor que reciba la url de conexion y
// export lo que solicite
// host: localhost
// port: 6601
function createRemoteDB(host, port) {
  function list(model) {}

  // req: conectarse por http hacia el  microservicio de bd
  // y extraer la info
  function req({ method, model, data }) {
    let url = `http://${host}:${port}`;

    if (method === "GET") {
      // modelos es el nombre de la tabla
      // http://localhost:6601/user
      url = `${url}/${model}`;

      // new Promise el padre de async await
      return new Promise((resolve, reject) => {
        // el tiempo de espera es indefinido 2 - 10
        let response = "";
        setTimeout(() => {
          response = fetch(url);
        }, 4000);

        if (response.status === 500) {
          return reject("internal error");
        }

        return resolve(response);
      });
    }
  }
}