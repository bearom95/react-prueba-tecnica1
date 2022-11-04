# react-prueba-tecnica1

Primera prueba técnica 04/11/22

¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
¿Hay alguna mejora que pueda hacer en su envío?
¿Qué haría de manera diferente si se le asignara más tiempo?

//tengo que evitar
que navigate se autoejecute, y eso lo consigo con las arrow primero.
En la primera pagina he metido los navigate dentro de un useEffect porque si no se llamaba en el momento que el componente era lanzado.
The error is preety much self-explanatory. You just need to wrap the navigate() in a useEffect() hook so that it gets executed after the component mounts.

But, in this case, it is being called as soon as the component is first rendered.

navigate() should be triggered by a user action or an useEffect hook in this case. But you're not playing by the rules :)
