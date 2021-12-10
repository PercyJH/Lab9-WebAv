# Promesas

- El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.


```
fetch('facebook.com') ===> El tiempo de espera no lo sé.
```
como puedo hacer para que mi funcion espere a la peticion de facebook
y luego devuelva el resultado

Respuesta:
Podemos usar: ```async await```

Debemos saber que ```async await``` es una promesa

Una promesa viene de una clase de ```JavaScript```

``` new Promise(resolve, reject)```
- una promesa recibe 2 cosas:
``` resolve ``` : Es la respuesta a cuando todo esta ok
``` reject ```  : Es la respuesta a cuando todo esta mal
```
try {
  const reponse = await fetch(url.com)
  console.log(reponse)
} catch (err) {
  console.log(err.toString())
}
```
En este caso casi si el fetch sale ok la promesa retorna ```resolve```
En caso el fetch falle la promesa retorna ```reject```
* Se entiende que si hace el console de reponse la promesa fue exitosa
* Por ende se entiende que devuelva el catch basicament es la respuesta que se puso en reject
```
return new Promise((resolve, reject) => {
  // recibe la funcion en este caso fetch
  const response = fetch(url.com)
  if (response.status === 200) {
    return resolve(response)
  } else {
    return reject('internal error')
  }
})
```